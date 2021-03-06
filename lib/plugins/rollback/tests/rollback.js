'use strict';

const expect = require('chai').expect;
const Rollback = require('../index');
const Serverless = require('../../../Serverless');

describe('Rollback', () => {
  let rollback;
  let serverless;

  beforeEach(() => {
    serverless = new Serverless();
    rollback = new Rollback(serverless);
  });

  describe('#constructor()', () => {
    it('should have the command rollback', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(rollback.commands.rollback).to.not.be.undefined;
    });

    it('should have a lifecycle events initialize and rollback', () => {
      expect(rollback.commands.rollback.lifecycleEvents).to.deep.equal([
        'initialize',
        'rollback',
      ]);
    });

    it('should have a required option timestamp', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(rollback.commands.rollback.options.timestamp.required).to.be.true;
    });
  });
});
