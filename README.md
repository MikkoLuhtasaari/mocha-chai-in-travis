# Mocha and Chai in Travis CI

## The purpose of this repository

A test project try out testing JS project with Mocha and Chai in Travis CI.

## Local development

* Install packages with npm install

* Run tests with npm test

## Known issues

* Test report artifact upload to S3 is not working properly.

  * Previously used credentials are removed from AWS IAM and need to be regenerated if we want to pursue this path further.

  * Artifact upload did not seem to recognize AWS regions `eu-north-1` or `eu-west-1`.

  * S3 deployment seemed to go a bit further but PUT request headers seemed to be malformed.
  
    * This seemed to be the more promising of the two options

[![Build Status](https://travis-ci.org/MikkoLuhtasaari/mocha-chai-in-travis.svg?branch=master)](https://travis-ci.org/MikkoLuhtasaari/mocha-chai-in-travis)
[![Coverage Status](https://coveralls.io/repos/github/MikkoLuhtasaari/mocha-chai-in-travis/badge.svg?branch=master)](https://coveralls.io/github/MikkoLuhtasaari/mocha-chai-in-travis?branch=master)