// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ChequesAPI from './cheques';
import {
  ChequeCreateParams,
  ChequeCreateResponse,
  ChequeDeleteResponse,
  ChequeListParams,
  ChequeListResponse,
  ChequeListResponsesList,
  ChequeRetrieveParams,
  ChequeRetrieveResponse,
  ChequeUpdateParams,
  ChequeUpdateResponse,
  Cheques,
} from './cheques';
import * as LettersAPI from './letters';
import {
  LetterCreateParams,
  LetterCreateResponse,
  LetterDeleteResponse,
  LetterListParams,
  LetterListResponse,
  LetterListResponsesList,
  LetterRetrieveParams,
  LetterRetrieveResponse,
  LetterUpdateParams,
  LetterUpdateResponse,
  Letters,
} from './letters';
import * as PostcardsAPI from './postcards';
import {
  PostcardCreateParams,
  PostcardCreateResponse,
  PostcardDeleteResponse,
  PostcardListParams,
  PostcardListResponse,
  PostcardListResponsesList,
  PostcardRetrieveParams,
  PostcardRetrieveResponse,
  PostcardUpdateParams,
  PostcardUpdateResponse,
  Postcards,
} from './postcards';
import * as SelfMailersAPI from './self-mailers';
import {
  SelfMailerCreateParams,
  SelfMailerCreateResponse,
  SelfMailerDeleteResponse,
  SelfMailerListParams,
  SelfMailerListResponse,
  SelfMailerListResponsesList,
  SelfMailerRetrieveParams,
  SelfMailerRetrieveResponse,
  SelfMailerUpdateParams,
  SelfMailerUpdateResponse,
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
    type ChequeCreateResponse as ChequeCreateResponse,
    type ChequeRetrieveResponse as ChequeRetrieveResponse,
    type ChequeUpdateResponse as ChequeUpdateResponse,
    type ChequeListResponse as ChequeListResponse,
    type ChequeDeleteResponse as ChequeDeleteResponse,
    type ChequeListResponsesList as ChequeListResponsesList,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeRetrieveParams as ChequeRetrieveParams,
    type ChequeUpdateParams as ChequeUpdateParams,
    type ChequeListParams as ChequeListParams,
  };

  export {
    Letters as Letters,
    type LetterCreateResponse as LetterCreateResponse,
    type LetterRetrieveResponse as LetterRetrieveResponse,
    type LetterUpdateResponse as LetterUpdateResponse,
    type LetterListResponse as LetterListResponse,
    type LetterDeleteResponse as LetterDeleteResponse,
    type LetterListResponsesList as LetterListResponsesList,
    type LetterCreateParams as LetterCreateParams,
    type LetterRetrieveParams as LetterRetrieveParams,
    type LetterUpdateParams as LetterUpdateParams,
    type LetterListParams as LetterListParams,
  };

  export {
    Postcards as Postcards,
    type PostcardCreateResponse as PostcardCreateResponse,
    type PostcardRetrieveResponse as PostcardRetrieveResponse,
    type PostcardUpdateResponse as PostcardUpdateResponse,
    type PostcardListResponse as PostcardListResponse,
    type PostcardDeleteResponse as PostcardDeleteResponse,
    type PostcardListResponsesList as PostcardListResponsesList,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardRetrieveParams as PostcardRetrieveParams,
    type PostcardUpdateParams as PostcardUpdateParams,
    type PostcardListParams as PostcardListParams,
  };

  export {
    SelfMailers as SelfMailers,
    type SelfMailerCreateResponse as SelfMailerCreateResponse,
    type SelfMailerRetrieveResponse as SelfMailerRetrieveResponse,
    type SelfMailerUpdateResponse as SelfMailerUpdateResponse,
    type SelfMailerListResponse as SelfMailerListResponse,
    type SelfMailerDeleteResponse as SelfMailerDeleteResponse,
    type SelfMailerListResponsesList as SelfMailerListResponsesList,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerRetrieveParams as SelfMailerRetrieveParams,
    type SelfMailerUpdateParams as SelfMailerUpdateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };
}
