// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BankAccountsAPI from './bank-accounts';
import {
  BankAccountCreateParams,
  BankAccountDeleteResponse,
  BankAccountListParams,
  BankAccounts,
} from './bank-accounts';
import * as BoxesAPI from './boxes';
import {
  BoxCreateParams,
  BoxCreateResponse,
  BoxDeleteResponse,
  BoxListParams,
  BoxListResponse,
  BoxListResponsesList,
  BoxRetrieveResponse,
  Boxes,
} from './boxes';
import * as CampaignsAPI from './campaigns';
import {
  CampaignCreateParams,
  CampaignCreateResponse,
  CampaignDeleteResponse,
  CampaignListParams,
  CampaignListResponse,
  CampaignListResponsesList,
  CampaignRetrieveResponse,
  CampaignSendParams,
  CampaignSendResponse,
  CampaignUpdateParams,
  CampaignUpdateResponse,
  Campaigns,
} from './campaigns';
import * as ChequesAPI from './cheques';
import { ChequeCreateParams, ChequeListParams, ChequeRetrieveURLResponse, Cheques } from './cheques';
import * as ContactsAPI from './contacts';
import { ContactCreateParams, ContactDeleteResponse, ContactListParams, Contacts } from './contacts';
import * as LettersAPI from './letters';
import { LetterCreateParams, LetterListParams, LetterRetrieveURLResponse, Letters } from './letters';
import * as MailingListImportsAPI from './mailing-list-imports';
import {
  MailingListImportCreateParams,
  MailingListImportCreateResponse,
  MailingListImportDeleteResponse,
  MailingListImportListParams,
  MailingListImportListResponse,
  MailingListImportListResponsesList,
  MailingListImportRetrieveResponse,
  MailingListImportUpdateParams,
  MailingListImportUpdateResponse,
  MailingListImports,
} from './mailing-list-imports';
import * as MailingListsAPI from './mailing-lists';
import {
  MailingListCreateParams,
  MailingListCreateResponse,
  MailingListDeleteResponse,
  MailingListJobsParams,
  MailingListJobsResponse,
  MailingListListParams,
  MailingListListResponse,
  MailingListListResponsesList,
  MailingListRetrieveResponse,
  MailingListUpdateParams,
  MailingListUpdateResponse,
  MailingLists,
} from './mailing-lists';
import * as PostcardsAPI from './postcards';
import {
  PostcardCreateParams,
  PostcardListParams,
  PostcardRetrieveURLResponse,
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
  SelfMailerRetrieveResponse,
  SelfMailerRetrieveURLResponse,
  SelfMailers,
} from './self-mailers';
import * as SubOrganizationsAPI from './sub-organizations';
import {
  SubOrganizationRetrieveParams,
  SubOrganizationRetrieveResponse,
  SubOrganizationRetrieveUsersParams,
  SubOrganizationRetrieveUsersResponse,
  SubOrganizationUpdateParams,
  SubOrganizationUpdateResponse,
  SubOrganizations,
} from './sub-organizations';
import * as TemplatesAPI from './templates';
import {
  TemplateCreateParams,
  TemplateDeleteResponse,
  TemplateListParams,
  TemplateUpdateParams,
  Templates,
} from './templates';
import * as OrderProfilesAPI from './order-profiles/order-profiles';
import { OrderProfiles } from './order-profiles/order-profiles';
import * as ReportsAPI from './reports/reports';
import {
  ReportDeleteResponse,
  ReportRetrieveParams,
  ReportRetrieveResponse,
  ReportUpdateParams,
  ReportUpdateResponse,
  Reports,
} from './reports/reports';

export class V1 extends APIResource {
  bankAccounts: BankAccountsAPI.BankAccounts = new BankAccountsAPI.BankAccounts(this._client);
  boxes: BoxesAPI.Boxes = new BoxesAPI.Boxes(this._client);
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  cheques: ChequesAPI.Cheques = new ChequesAPI.Cheques(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  letters: LettersAPI.Letters = new LettersAPI.Letters(this._client);
  mailingListImports: MailingListImportsAPI.MailingListImports = new MailingListImportsAPI.MailingListImports(
    this._client,
  );
  mailingLists: MailingListsAPI.MailingLists = new MailingListsAPI.MailingLists(this._client);
  orderProfiles: OrderProfilesAPI.OrderProfiles = new OrderProfilesAPI.OrderProfiles(this._client);
  postcards: PostcardsAPI.Postcards = new PostcardsAPI.Postcards(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
  selfMailers: SelfMailersAPI.SelfMailers = new SelfMailersAPI.SelfMailers(this._client);
  subOrganizations: SubOrganizationsAPI.SubOrganizations = new SubOrganizationsAPI.SubOrganizations(
    this._client,
  );
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
}

V1.BankAccounts = BankAccounts;
V1.Boxes = Boxes;
V1.Campaigns = Campaigns;
V1.Cheques = Cheques;
V1.Contacts = Contacts;
V1.Letters = Letters;
V1.MailingListImports = MailingListImports;
V1.MailingLists = MailingLists;
V1.OrderProfiles = OrderProfiles;
V1.Postcards = Postcards;
V1.Reports = Reports;
V1.SelfMailers = SelfMailers;
V1.SubOrganizations = SubOrganizations;
V1.Templates = Templates;

export declare namespace V1 {
  export {
    BankAccounts as BankAccounts,
    type BankAccountDeleteResponse as BankAccountDeleteResponse,
    type BankAccountCreateParams as BankAccountCreateParams,
    type BankAccountListParams as BankAccountListParams,
  };

  export {
    Boxes as Boxes,
    type BoxCreateResponse as BoxCreateResponse,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxDeleteResponse as BoxDeleteResponse,
    type BoxListResponsesList as BoxListResponsesList,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
  };

  export {
    Campaigns as Campaigns,
    type CampaignCreateResponse as CampaignCreateResponse,
    type CampaignRetrieveResponse as CampaignRetrieveResponse,
    type CampaignUpdateResponse as CampaignUpdateResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignDeleteResponse as CampaignDeleteResponse,
    type CampaignSendResponse as CampaignSendResponse,
    type CampaignListResponsesList as CampaignListResponsesList,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignSendParams as CampaignSendParams,
  };

  export {
    Cheques as Cheques,
    type ChequeRetrieveURLResponse as ChequeRetrieveURLResponse,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeListParams as ChequeListParams,
  };

  export {
    Contacts as Contacts,
    type ContactDeleteResponse as ContactDeleteResponse,
    type ContactCreateParams as ContactCreateParams,
    type ContactListParams as ContactListParams,
  };

  export {
    Letters as Letters,
    type LetterRetrieveURLResponse as LetterRetrieveURLResponse,
    type LetterCreateParams as LetterCreateParams,
    type LetterListParams as LetterListParams,
  };

  export {
    MailingListImports as MailingListImports,
    type MailingListImportCreateResponse as MailingListImportCreateResponse,
    type MailingListImportRetrieveResponse as MailingListImportRetrieveResponse,
    type MailingListImportUpdateResponse as MailingListImportUpdateResponse,
    type MailingListImportListResponse as MailingListImportListResponse,
    type MailingListImportDeleteResponse as MailingListImportDeleteResponse,
    type MailingListImportListResponsesList as MailingListImportListResponsesList,
    type MailingListImportCreateParams as MailingListImportCreateParams,
    type MailingListImportUpdateParams as MailingListImportUpdateParams,
    type MailingListImportListParams as MailingListImportListParams,
  };

  export {
    MailingLists as MailingLists,
    type MailingListCreateResponse as MailingListCreateResponse,
    type MailingListRetrieveResponse as MailingListRetrieveResponse,
    type MailingListUpdateResponse as MailingListUpdateResponse,
    type MailingListListResponse as MailingListListResponse,
    type MailingListDeleteResponse as MailingListDeleteResponse,
    type MailingListJobsResponse as MailingListJobsResponse,
    type MailingListListResponsesList as MailingListListResponsesList,
    type MailingListCreateParams as MailingListCreateParams,
    type MailingListUpdateParams as MailingListUpdateParams,
    type MailingListListParams as MailingListListParams,
    type MailingListJobsParams as MailingListJobsParams,
  };

  export { OrderProfiles as OrderProfiles };

  export {
    Postcards as Postcards,
    type PostcardRetrieveURLResponse as PostcardRetrieveURLResponse,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardListParams as PostcardListParams,
  };

  export {
    Reports as Reports,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportUpdateResponse as ReportUpdateResponse,
    type ReportDeleteResponse as ReportDeleteResponse,
    type ReportUpdateParams as ReportUpdateParams,
    type ReportRetrieveParams as ReportRetrieveParams,
  };

  export {
    SelfMailers as SelfMailers,
    type SelfMailerCreateResponse as SelfMailerCreateResponse,
    type SelfMailerRetrieveResponse as SelfMailerRetrieveResponse,
    type SelfMailerListResponse as SelfMailerListResponse,
    type SelfMailerDeleteResponse as SelfMailerDeleteResponse,
    type SelfMailerRetrieveURLResponse as SelfMailerRetrieveURLResponse,
    type SelfMailerListResponsesList as SelfMailerListResponsesList,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };

  export {
    SubOrganizations as SubOrganizations,
    type SubOrganizationRetrieveResponse as SubOrganizationRetrieveResponse,
    type SubOrganizationUpdateResponse as SubOrganizationUpdateResponse,
    type SubOrganizationRetrieveUsersResponse as SubOrganizationRetrieveUsersResponse,
    type SubOrganizationUpdateParams as SubOrganizationUpdateParams,
    type SubOrganizationRetrieveParams as SubOrganizationRetrieveParams,
    type SubOrganizationRetrieveUsersParams as SubOrganizationRetrieveUsersParams,
  };

  export {
    Templates as Templates,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };
}
