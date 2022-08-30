SET check_function_bodies = false;

CREATE TABLE customer(
"document" varchar NOT NULL, "name" varchar,
  CONSTRAINT customer_pkey PRIMARY KEY("document")
);

CREATE UNIQUE INDEX customer_idx ON customer;

CREATE TABLE expert(
  id integer NOT NULL,
  "name" varchar NOT NULL,
  expertises varchar[] NOT NULL,
  CONSTRAINT expert_pkey PRIMARY KEY(id)
);

CREATE TABLE scheduling_block(
  id integer NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  note varchar,
  CONSTRAINT scheduling_block_pkey PRIMARY KEY(id)
);

CREATE TABLE scheduling(
  id integer NOT NULL,
  customer_document varchar NOT NULL,
  note varchar,
  CONSTRAINT scheduling_pkey PRIMARY KEY(id)
);

CREATE TABLE scheduling_date(
  id integer NOT NULL,
  scheduling_id integer NOT NULL,
  date date NOT NULL,
  CONSTRAINT scheduling_date_pkey PRIMARY KEY(id)
);

CREATE TABLE scheduling_date_expert(
scheduling_date_id integer NOT NULL, expert_id integer NOT NULL,
  CONSTRAINT scheduling_date_expert_pkey PRIMARY KEY
    (scheduling_date_id, expert_id)
);

ALTER TABLE scheduling
  ADD CONSTRAINT scheduling_customer_document_fkey
    FOREIGN KEY (customer_document) REFERENCES customer ("document");

ALTER TABLE scheduling_date
  ADD CONSTRAINT scheduling_date_scheduling_id_fkey
    FOREIGN KEY (scheduling_id) REFERENCES scheduling (id);

ALTER TABLE scheduling_date_expert
  ADD CONSTRAINT scheduling_date_expert_scheduling_date_id_fkey
    FOREIGN KEY (scheduling_date_id) REFERENCES scheduling_date (id);

ALTER TABLE scheduling_date_expert
  ADD CONSTRAINT scheduling_date_expert_expert_id_fkey
    FOREIGN KEY (expert_id) REFERENCES expert (id);
