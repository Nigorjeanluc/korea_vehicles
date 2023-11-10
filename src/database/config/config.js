/* eslint-disable default-param-last */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable require-jsdoc */
import dotenv from 'dotenv';

dotenv.config();

class GenerateCredentials {
  constructor(username = 'postgres', password = '', database, host, dialect = 'postgres', dialectOptions = undefined) {
    this.username = username,
    this.password = password,
    this.database = database,
    this.host = host,
    this.dialect = dialect,
    this.logging = false,
    this.dialectOptions = dialectOptions
  }

  getCredentials() {
    return {
      username: this.username,
      password: this.password,
      database: this.database,
      host: this.host,
      dialect: this.dialect,
      logging: this.logging
    }
  }

  setCredentials(credentials) {
    this.username = credentials.username,
    this.password = credentials.password,
    this.database = credentials.database,
    this.host = credentials.host,
    this.dialect = credentials.dialect,
    this.logging = credentials.logging
  }
}

const devDB = new GenerateCredentials(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  process.env.DEVELOP_DB_NAME,
  process.env.DB_HOST,
  'postgres'
)

const testDB = new GenerateCredentials(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  process.env.TEST_DB_NAME,
  process.env.DB_HOST,
  'postgres'
)

const prodDB = new GenerateCredentials(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  process.env.PRODUCTION_DB_NAME,
  process.env.DB_HOST,
  'postgres',
  {
    ssl: {
      ssl: true,
      native: true
    }
  }
)

const development = devDB.getCredentials()
const test = testDB.getCredentials()
const production = prodDB.getCredentials()

export default {
  development,
  test,
  production
};

export {
  development,
  test,
  production
};
