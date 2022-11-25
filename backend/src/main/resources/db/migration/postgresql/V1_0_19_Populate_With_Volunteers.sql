--1
INSERT INTO email_confirmation
(id,email, hash, created_on, updated_on)
VALUES
(
 10,
 'pepito@gmail.com',
 'cf12e438d87915c29e77010edc3f56d9',
 '2022-11-24 23:50:52.274000',
 '2022-11-24 23:50:52.274000'
 );

INSERT INTO credentials
(email, hashed_password, email_confirmed,
 email_confirmation_id, hash_recovery_password,
 created_recovery_hash_on, id, surrogate_key)
VALUES
    ('pepito@gmail.com',
     '$2a$10$gNWZ8j0zre/0zHbql.QoEeUpWZpbVi5dD7s7xjfDKEOZbsJJ23vbK',
     true,
     10,
     NULL,
     NULL,
     '9c7860f1-3712-4a08-a757-3b2c543bc7g3',
     10
    );

INSERT INTO credential_roles
(credential_id, role_id)
VALUES
(10,2);

INSERT INTO volunteers
(id, surrogate_key, location_id,
 profile_id, credential_id)
VALUES
    (
        '42c58abd933c11304fcaa7a18cefaaaa',
        10,
        null,
        null,
        '9c7860f1-3712-4a08-a757-3b2c543bc7g3'
    );
-------------------------------------------------
--2
INSERT INTO email_confirmation
(id,email, hash, created_on, updated_on)
VALUES
    (
        11,
        'fulanita@gmail.com',
        '932362279f2aeb3674521e602e117a1d',
        '2022-11-24 23:50:52.274000',
        '2022-11-24 23:50:52.274000'
    );

INSERT INTO credentials
(email, hashed_password, email_confirmed,
 email_confirmation_id, hash_recovery_password,
 created_recovery_hash_on, id, surrogate_key)
VALUES
    ('fulanita@gmail.com',
     '$2a$10$gNWZ8j0zre/0zHbql.QoEeUpWZpbVi5dD7s7xjfDKEOZbsJJ23vbK',
     true,
     11,
     NULL,
     NULL,
     '932362279f2aeb3674521e602e117a1d',
     11
    );

INSERT INTO credential_roles
(credential_id, role_id)
VALUES
    (11,2);

INSERT INTO volunteers
(id, surrogate_key, location_id,
 profile_id, credential_id)
VALUES
    (
        '932362279f2aeb3674521e602e117a1d',
        11,
        null,
        null,
        '932362279f2aeb3674521e602e117a1d'
    );