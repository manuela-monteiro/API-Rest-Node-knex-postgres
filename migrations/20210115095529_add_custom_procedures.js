const CUSTOM_PROCEDURES = `
CREATE OR REPLACE FUNCTION on_update_timestamp()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';
`

const DROP_CUSTOM_PROCEDURES = `
DROP FUNCTION on_update_timestamp()
`

exports.up = async knex => knex.raw(CUSTOM_PROCEDURES);

exports.down = async knex => knex.raw(DROP_CUSTOM_PROCEDURES);