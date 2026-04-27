// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChequesAPI from './cheques';
import {
  ChequeCreateParams,
  ChequeDeleteResponse,
  ChequeListParams,
  ChequeListResponse,
  ChequeListResponsesSkipLimit,
  ChequeProfile,
  ChequeRetrieveParams,
  ChequeUpdateParams,
  Cheques,
  CurrencyCode,
} from './cheques';
import * as LettersAPI from './letters';
import {
  LetterCreateParams,
  LetterDeleteResponse,
  LetterListParams,
  LetterProfile,
  LetterProfilesSkipLimit,
  LetterRetrieveParams,
  LetterUpdateParams,
  Letters,
} from './letters';
import * as PostcardsAPI from './postcards';
import {
  PostcardCreateParams,
  PostcardDeleteResponse,
  PostcardListParams,
  PostcardProfile,
  PostcardProfilesSkipLimit,
  PostcardRetrieveParams,
  PostcardSize,
  PostcardUpdateParams,
  Postcards,
} from './postcards';
import * as SelfMailersAPI from './self-mailers';
import {
  SelfMailerCreateParams,
  SelfMailerDeleteResponse,
  SelfMailerListParams,
  SelfMailerProfile,
  SelfMailerProfilesSkipLimit,
  SelfMailerRetrieveParams,
  SelfMailerSize,
  SelfMailerUpdateParams,
  SelfMailers,
} from './self-mailers';

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
  export {
    Cheques as Cheques,
    type ChequeProfile as ChequeProfile,
    type CurrencyCode as CurrencyCode,
    type ChequeListResponse as ChequeListResponse,
    type ChequeDeleteResponse as ChequeDeleteResponse,
    type ChequeListResponsesSkipLimit as ChequeListResponsesSkipLimit,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeRetrieveParams as ChequeRetrieveParams,
    type ChequeUpdateParams as ChequeUpdateParams,
    type ChequeListParams as ChequeListParams,
  };

  export {
    Letters as Letters,
    type LetterProfile as LetterProfile,
    type LetterDeleteResponse as LetterDeleteResponse,
    type LetterProfilesSkipLimit as LetterProfilesSkipLimit,
    type LetterCreateParams as LetterCreateParams,
    type LetterRetrieveParams as LetterRetrieveParams,
    type LetterUpdateParams as LetterUpdateParams,
    type LetterListParams as LetterListParams,
  };

  export {
    Postcards as Postcards,
    type PostcardProfile as PostcardProfile,
    type PostcardSize as PostcardSize,
    type PostcardDeleteResponse as PostcardDeleteResponse,
    type PostcardProfilesSkipLimit as PostcardProfilesSkipLimit,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardRetrieveParams as PostcardRetrieveParams,
    type PostcardUpdateParams as PostcardUpdateParams,
    type PostcardListParams as PostcardListParams,
  };

  export {
    SelfMailers as SelfMailers,
    type SelfMailerProfile as SelfMailerProfile,
    type SelfMailerSize as SelfMailerSize,
    type SelfMailerDeleteResponse as SelfMailerDeleteResponse,
    type SelfMailerProfilesSkipLimit as SelfMailerProfilesSkipLimit,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerRetrieveParams as SelfMailerRetrieveParams,
    type SelfMailerUpdateParams as SelfMailerUpdateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };
}
