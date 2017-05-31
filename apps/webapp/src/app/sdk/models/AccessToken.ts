/* tslint:disable */
import {
  Account
} from '../index';

declare var Object: any;
export interface AccessTokenInterface {
  "id"?: string;
  "ttl"?: number;
  "created"?: Date;
  "userId"?: any;
  user?: Account;
}

export class AccessToken implements AccessTokenInterface {
  "id": string;
  "ttl": number;
  "created": Date;
  "userId": any;
  user: Account;
  constructor(data?: AccessTokenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AccessToken`.
   */
  public static getModelName() {
    return "AccessToken";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AccessToken for dynamic purposes.
  **/
  public static factory(data: AccessTokenInterface): AccessToken{
    return new AccessToken(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'AccessToken',
      plural: 'AccessTokens',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "ttl": {
          name: 'ttl',
          type: 'number',
          default: 1209600
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "userId": {
          name: 'userId',
          type: 'any'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'Account',
          model: 'Account'
        },
      }
    }
  }
}
