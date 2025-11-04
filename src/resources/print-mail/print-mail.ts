// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BankAccountsAPI from './bank-accounts';
import {
  BankAccount,
  BankAccountCountryCode,
  BankAccountCreateParams,
  BankAccountDeleteResponse,
  BankAccountListParams,
  BankAccountListResponse,
  BankAccounts,
} from './bank-accounts';
import * as BoxesAPI from './boxes';
import {
  Box,
  BoxChequeBase,
  BoxCreateParams,
  BoxListParams,
  BoxListResponse,
  Boxes,
  Cancellation,
  OrderImbStatus,
  OrderMailingClass,
  OrderStatus,
} from './boxes';
import * as CampaignsAPI from './campaigns';
import {
  Campaign,
  CampaignCreateParams,
  CampaignDeleteResponse,
  CampaignListParams,
  CampaignListResponse,
  CampaignSendParams,
  CampaignUpdateParams,
  Campaigns,
} from './campaigns';
import * as ChequesAPI from './cheques';
import {
  Cheque,
  ChequeCreateParams,
  ChequeListParams,
  ChequeListResponse,
  ChequeRetrieveURLResponse,
  ChequeSize,
  Cheques,
  DigitalOnly,
} from './cheques';
import * as ContactsAPI from './contacts';
import {
  Contact,
  ContactCreate,
  ContactCreateParams,
  ContactDeleteResponse,
  ContactListParams,
  ContactListResponse,
  Contacts,
} from './contacts';
import * as LettersAPI from './letters';
import {
  AddressPlacement,
  AttachedPdf,
  Letter,
  LetterCreateParams,
  LetterListParams,
  LetterListResponse,
  LetterRetrieveURLResponse,
  LetterSize,
  Letters,
  PlasticCard,
} from './letters';
import * as MailingListImportsAPI from './mailing-list-imports';
import {
  FileType,
  MailingListImportCreateParams,
  MailingListImportDeleteResponse,
  MailingListImportListParams,
  MailingListImportListResponse,
  MailingListImportResponse,
  MailingListImportUpdateParams,
  MailingListImports,
  VerificationStatusCount,
} from './mailing-list-imports';
import * as MailingListsAPI from './mailing-lists';
import {
  MailingList,
  MailingListCreateParams,
  MailingListDeleteResponse,
  MailingListJobsParams,
  MailingListListParams,
  MailingListListResponse,
  MailingListUpdate,
  MailingListUpdateParams,
  MailingLists,
} from './mailing-lists';
import * as PostcardsAPI from './postcards';
import {
  Postcard,
  PostcardCreateParams,
  PostcardListParams,
  PostcardListResponse,
  PostcardRetrieveURLResponse,
  Postcards,
} from './postcards';
import * as SelfMailersAPI from './self-mailers';
import {
  SelfMailer,
  SelfMailerCreateParams,
  SelfMailerListParams,
  SelfMailerListResponse,
  SelfMailerRetrieveURLResponse,
  SelfMailers,
} from './self-mailers';
import * as SubOrganizationsAPI from './sub-organizations';
import {
  EmailPreferences,
  SubOrganization,
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
  Template,
  TemplateCreateParams,
  TemplateDeleteResponse,
  TemplateListParams,
  TemplateListResponse,
  TemplateUpdateParams,
  Templates,
} from './templates';
import * as OrderProfilesAPI from './order-profiles/order-profiles';
import { OrderProfiles } from './order-profiles/order-profiles';
import * as ReportsAPI from './reports/reports';
import {
  DeletedResponse,
  Report,
  ReportRetrieveParams,
  ReportRetrieveResponse,
  ReportUpdateParams,
  Reports,
} from './reports/reports';

export class PrintMail extends APIResource {
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

PrintMail.BankAccounts = BankAccounts;
PrintMail.Boxes = Boxes;
PrintMail.Campaigns = Campaigns;
PrintMail.Cheques = Cheques;
PrintMail.Contacts = Contacts;
PrintMail.Letters = Letters;
PrintMail.MailingListImports = MailingListImports;
PrintMail.MailingLists = MailingLists;
PrintMail.OrderProfiles = OrderProfiles;
PrintMail.Postcards = Postcards;
PrintMail.Reports = Reports;
PrintMail.SelfMailers = SelfMailers;
PrintMail.SubOrganizations = SubOrganizations;
PrintMail.Templates = Templates;

export declare namespace PrintMail {
  export {
    BankAccounts as BankAccounts,
    type BankAccount as BankAccount,
    type BankAccountCountryCode as BankAccountCountryCode,
    type BankAccountListResponse as BankAccountListResponse,
    type BankAccountDeleteResponse as BankAccountDeleteResponse,
    type BankAccountCreateParams as BankAccountCreateParams,
    type BankAccountListParams as BankAccountListParams,
  };

  export {
    Boxes as Boxes,
    type Box as Box,
    type BoxChequeBase as BoxChequeBase,
    type Cancellation as Cancellation,
    type OrderImbStatus as OrderImbStatus,
    type OrderMailingClass as OrderMailingClass,
    type OrderStatus as OrderStatus,
    type BoxListResponse as BoxListResponse,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
  };

  export {
    Campaigns as Campaigns,
    type Campaign as Campaign,
    type CampaignListResponse as CampaignListResponse,
    type CampaignDeleteResponse as CampaignDeleteResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignSendParams as CampaignSendParams,
  };

  export {
    Cheques as Cheques,
    type Cheque as Cheque,
    type ChequeSize as ChequeSize,
    type DigitalOnly as DigitalOnly,
    type ChequeListResponse as ChequeListResponse,
    type ChequeRetrieveURLResponse as ChequeRetrieveURLResponse,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeListParams as ChequeListParams,
  };

  export {
    Contacts as Contacts,
    type Contact as Contact,
    type ContactCreate as ContactCreate,
    type ContactListResponse as ContactListResponse,
    type ContactDeleteResponse as ContactDeleteResponse,
    type ContactCreateParams as ContactCreateParams,
    type ContactListParams as ContactListParams,
  };

  export {
    Letters as Letters,
    type AddressPlacement as AddressPlacement,
    type AttachedPdf as AttachedPdf,
    type Letter as Letter,
    type LetterSize as LetterSize,
    type PlasticCard as PlasticCard,
    type LetterListResponse as LetterListResponse,
    type LetterRetrieveURLResponse as LetterRetrieveURLResponse,
    type LetterCreateParams as LetterCreateParams,
    type LetterListParams as LetterListParams,
  };

  export {
    MailingListImports as MailingListImports,
    type FileType as FileType,
    type MailingListImportResponse as MailingListImportResponse,
    type VerificationStatusCount as VerificationStatusCount,
    type MailingListImportListResponse as MailingListImportListResponse,
    type MailingListImportDeleteResponse as MailingListImportDeleteResponse,
    type MailingListImportCreateParams as MailingListImportCreateParams,
    type MailingListImportUpdateParams as MailingListImportUpdateParams,
    type MailingListImportListParams as MailingListImportListParams,
  };

  export {
    MailingLists as MailingLists,
    type MailingList as MailingList,
    type MailingListUpdate as MailingListUpdate,
    type MailingListListResponse as MailingListListResponse,
    type MailingListDeleteResponse as MailingListDeleteResponse,
    type MailingListCreateParams as MailingListCreateParams,
    type MailingListUpdateParams as MailingListUpdateParams,
    type MailingListListParams as MailingListListParams,
    type MailingListJobsParams as MailingListJobsParams,
  };

  export { OrderProfiles as OrderProfiles };

  export {
    Postcards as Postcards,
    type Postcard as Postcard,
    type PostcardListResponse as PostcardListResponse,
    type PostcardRetrieveURLResponse as PostcardRetrieveURLResponse,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardListParams as PostcardListParams,
  };

  export {
    Reports as Reports,
    type DeletedResponse as DeletedResponse,
    type Report as Report,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportUpdateParams as ReportUpdateParams,
    type ReportRetrieveParams as ReportRetrieveParams,
  };

  export {
    SelfMailers as SelfMailers,
    type SelfMailer as SelfMailer,
    type SelfMailerListResponse as SelfMailerListResponse,
    type SelfMailerRetrieveURLResponse as SelfMailerRetrieveURLResponse,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };

  export {
    SubOrganizations as SubOrganizations,
    type EmailPreferences as EmailPreferences,
    type SubOrganization as SubOrganization,
    type SubOrganizationUpdateResponse as SubOrganizationUpdateResponse,
    type SubOrganizationRetrieveResponse as SubOrganizationRetrieveResponse,
    type SubOrganizationRetrieveUsersResponse as SubOrganizationRetrieveUsersResponse,
    type SubOrganizationUpdateParams as SubOrganizationUpdateParams,
    type SubOrganizationRetrieveParams as SubOrganizationRetrieveParams,
    type SubOrganizationRetrieveUsersParams as SubOrganizationRetrieveUsersParams,
  };

  export {
    Templates as Templates,
    type Template as Template,
    type TemplateListResponse as TemplateListResponse,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };
}
