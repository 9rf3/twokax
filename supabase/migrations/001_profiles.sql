-- ============================================================================
-- Profiles Table
-- ============================================================================

create table public.profiles (
  id          uuid        primary key references auth.users (id) on delete cascade,
  updated_at  timestamptz not null default now(),
  username    text        unique,
  avatar_url  text,
  xp          integer     not null default 0 check (xp >= 0),
  level       integer     not null default 1 check (level >= 0),
  gold        integer     not null default 0 check (gold >= 0),
  streak      integer     not null default 0 check (streak >= 0),
  last_active_at timestamptz not null default now()
);

-- ============================================================================
-- Row Level Security
-- ============================================================================

alter table public.profiles enable row level security;

-- Anyone can view any profile (public read).
create policy "Public profiles are viewable by everyone."
  on public.profiles
  for select
  using (true);

-- A user can only update their own row.
create policy "Users can update their own profile."
  on public.profiles
  for update
  using (auth.uid() = id);

-- ============================================================================
-- Automatic Profile Creation on Signup
-- ============================================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, username)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'username',
      'user_' || substr(new.id::text, 1, 8)
    )
  );
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
