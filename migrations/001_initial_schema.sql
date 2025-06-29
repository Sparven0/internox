CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  domain TEXT NOT NULL UNIQUE,
  db_name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now()
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL,
  role TEXT NOT NULL,
  password TEXT NOT NULL
);
