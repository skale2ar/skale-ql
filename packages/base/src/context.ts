import { EthqlServiceFactories, EthqlServices } from '.';
import { Options } from './config';
import express from 'express';

export class EthqlContext {
  public readonly req: express.Request;
  public readonly services: EthqlServices;

  constructor(public readonly _req: express.Request, public readonly config: Options, serviceFactories: EthqlServiceFactories) {
    this.req = _req;
    this.services = new EthqlServices(serviceFactories, this);
  }
}
