create database challenge;

create table users(
  id serial primary key,
  username text not null,
  email text not null unique,
  password text not null,
  cpf text unique,
  phone text
);

create table clients(
  id serial primary key,
  name text not null,
  email text not null unique,
  cpf text unique,
  phone text not null,
  zipcode text,
  streetname text,
  streetnumber text,
  additionalinfo text,
  neighborhood text,
  city text,
  state text,
  defaulter boolean not null default false
);