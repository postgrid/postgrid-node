// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChequesAPI from './cheques';
import { Cheques } from './cheques';
import * as LettersAPI from './letters';
import { Letters } from './letters';
import * as PostcardsAPI from './postcards';
import { Postcards } from './postcards';
import * as SelfMailersAPI from './self-mailers';
import { SelfMailers } from './self-mailers';

export class OrderProfiles extends APIResource {
  cheques: ChequesAPI.Cheques = new ChequesAPI.Cheques(this._client);
  letters: LettersAPI.Letters = new LettersAPI.Letters(this._client);
  postcards: PostcardsAPI.Postcards = new PostcardsAPI.Postcards(this._client);
  selfMailers: SelfMailersAPI.SelfMailers = new SelfMailersAPI.SelfMailers(this._client);
}

OrderProfiles.Cheques = Cheques;
OrderProfiles.Letters = Letters;
OrderProfiles.Postcards = Postcards;
OrderProfiles.SelfMailers = SelfMailers;

export declare namespace OrderProfiles {
  export { Cheques as Cheques };

  export { Letters as Letters };

  export { Postcards as Postcards };

  export { SelfMailers as SelfMailers };
}
