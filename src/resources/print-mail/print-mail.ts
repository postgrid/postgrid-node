// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BankAccountsAPI from './bank-accounts';
import {
  BankAccount,
  BankAccountCountryCode,
  BankAccountCreateParams,
  BankAccountDeleteResponse,
  BankAccountListParams,
  BankAccounts,
  BankAccountsSkipLimit,
} from './bank-accounts';
import * as BoxesAPI from './boxes';
import {
  BoxCreateParams,
  BoxCreateResponse,
  BoxDeleteResponse,
  BoxListParams,
  BoxListResponse,
  BoxListResponsesSkipLimit,
  BoxProgressionsResponse,
  BoxRetrieveResponse,
  Boxes,
} from './boxes';
import * as CampaignsAPI from './campaigns';
import {
  Campaign,
  CampaignCreateParams,
  CampaignDeleteResponse,
  CampaignListParams,
  CampaignSendParams,
  CampaignUpdateParams,
  Campaigns,
  CampaignsSkipLimit,
} from './campaigns';
import * as ChequesAPI from './cheques';
import {
  Cheque,
  ChequeCancelParams,
  ChequeCreateParams,
  ChequeListParams,
  ChequeRetrieveURLResponse,
  ChequeSize,
  Cheques,
  ChequesSkipLimit,
  DigitalOnly,
} from './cheques';
import * as ContactsAPI from './contacts';
import {
  Contact,
  ContactCreate,
  ContactCreateParams,
  ContactCreateWithCompanyName,
  ContactCreateWithFirstName,
  ContactDeleteResponse,
  ContactListParams,
  Contacts,
  ContactsSkipLimit,
} from './contacts';
import * as LettersAPI from './letters';
import {
  AddressPlacement,
  AttachedPdf,
  Letter,
  LetterCancelParams,
  LetterCreateParams,
  LetterListParams,
  LetterRetrieveURLResponse,
  LetterSize,
  Letters,
  LettersSkipLimit,
  PlasticCard,
} from './letters';
import * as MailingListImportsAPI from './mailing-list-imports';
import {
  FileType,
  MailingListImportCreateParams,
  MailingListImportDeleteResponse,
  MailingListImportListParams,
  MailingListImportResponse,
  MailingListImportResponsesSkipLimit,
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
  MailingListUpdate,
  MailingListUpdateParams,
  MailingLists,
  MailingListsSkipLimit,
} from './mailing-lists';
import * as PostcardsAPI from './postcards';
import {
  Postcard,
  PostcardCancelParams,
  PostcardCreateParams,
  PostcardListParams,
  PostcardRetrieveURLResponse,
  Postcards,
  PostcardsSkipLimit,
} from './postcards';
import * as SelfMailersAPI from './self-mailers';
import {
  SelfMailer,
  SelfMailerCreateParams,
  SelfMailerListParams,
  SelfMailerRetrieveURLResponse,
  SelfMailers,
  SelfMailersSkipLimit,
} from './self-mailers';
import * as SnapPacksAPI from './snap-packs';
import {
  SnapPackCreateParams,
  SnapPackCreateResponse,
  SnapPackDeleteResponse,
  SnapPackListParams,
  SnapPackListResponse,
  SnapPackListResponsesSkipLimit,
  SnapPackProgressionsResponse,
  SnapPackRetrieveCapabilitiesParams,
  SnapPackRetrieveCapabilitiesResponse,
  SnapPackRetrieveResponse,
  SnapPacks,
} from './snap-packs';
import * as SubOrganizationsAPI from './sub-organizations';
import {
  EmailPreferences,
  SubOrganization,
  SubOrganizationCreateParams,
  SubOrganizationCreateResponse,
  SubOrganizationListParams,
  SubOrganizationRetrieveUsersParams,
  SubOrganizationRetrieveUsersResponse,
  SubOrganizations,
  SubOrganizationsSkipLimit,
} from './sub-organizations';
import * as TemplateEditorSessionsAPI from './template-editor-sessions';
import {
  TemplateEditorSessionCreateParams,
  TemplateEditorSessionCreateResponse,
  TemplateEditorSessionDeleteResponse,
  TemplateEditorSessionListParams,
  TemplateEditorSessionListResponse,
  TemplateEditorSessionListResponsesSkipLimit,
  TemplateEditorSessions,
} from './template-editor-sessions';
import * as TemplatesAPI from './templates';
import {
  Template,
  TemplateCreateParams,
  TemplateDeleteResponse,
  TemplateListParams,
  TemplateUpdateParams,
  Templates,
  TemplatesSkipLimit,
} from './templates';
import * as TrackersAPI from './trackers';
import {
  TrackerCreateParams,
  TrackerCreateResponse,
  TrackerDeleteResponse,
  TrackerListParams,
  TrackerListResponse,
  TrackerListResponsesSkipLimit,
  TrackerRetrieveResponse,
  TrackerRetrieveVisitsParams,
  TrackerRetrieveVisitsResponse,
  TrackerRetrieveVisitsResponsesSkipLimit,
  TrackerUpdateParams,
  TrackerUpdateResponse,
  Trackers,
} from './trackers';
import * as ReportsAPI from './reports/reports';
import {
  DeletedResponse,
  Report,
  ReportCreateParams,
  ReportListParams,
  ReportSampleParams,
  ReportUpdateParams,
  Reports,
  ReportsSkipLimit,
} from './reports/reports';
import * as TargetedListBuildsAPI from './targeted-list-builds/targeted-list-builds';
import {
  TargetedListBuildConfirmResponse,
  TargetedListBuildCreateParams,
  TargetedListBuildCreateResponse,
  TargetedListBuildDeleteResponse,
  TargetedListBuildListParams,
  TargetedListBuildListResponse,
  TargetedListBuildListResponsesSkipLimit,
  TargetedListBuildRetrieveResponse,
  TargetedListBuildUpdateParams,
  TargetedListBuildUpdateResponse,
  TargetedListBuilds,
} from './targeted-list-builds/targeted-list-builds';
import * as VirtualMailboxesAPI from './virtual-mailboxes/virtual-mailboxes';
import {
  VirtualMailboxCreateParams,
  VirtualMailboxCreateResponse,
  VirtualMailboxListParams,
  VirtualMailboxListResponse,
  VirtualMailboxListResponsesSkipLimit,
  VirtualMailboxRetrieveAddressResponse,
  VirtualMailboxRetrieveResponse,
  VirtualMailboxes,
} from './virtual-mailboxes/virtual-mailboxes';

export class PrintMail extends APIResource {
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  trackers: TrackersAPI.Trackers = new TrackersAPI.Trackers(this._client);
  letters: LettersAPI.Letters = new LettersAPI.Letters(this._client);
  postcards: PostcardsAPI.Postcards = new PostcardsAPI.Postcards(this._client);
  bankAccounts: BankAccountsAPI.BankAccounts = new BankAccountsAPI.BankAccounts(this._client);
  cheques: ChequesAPI.Cheques = new ChequesAPI.Cheques(this._client);
  selfMailers: SelfMailersAPI.SelfMailers = new SelfMailersAPI.SelfMailers(this._client);
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  mailingListImports: MailingListImportsAPI.MailingListImports = new MailingListImportsAPI.MailingListImports(
    this._client,
  );
  mailingLists: MailingListsAPI.MailingLists = new MailingListsAPI.MailingLists(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
  subOrganizations: SubOrganizationsAPI.SubOrganizations = new SubOrganizationsAPI.SubOrganizations(
    this._client,
  );
  boxes: BoxesAPI.Boxes = new BoxesAPI.Boxes(this._client);
  snapPacks: SnapPacksAPI.SnapPacks = new SnapPacksAPI.SnapPacks(this._client);
  targetedListBuilds: TargetedListBuildsAPI.TargetedListBuilds = new TargetedListBuildsAPI.TargetedListBuilds(
    this._client,
  );
  templateEditorSessions: TemplateEditorSessionsAPI.TemplateEditorSessions =
    new TemplateEditorSessionsAPI.TemplateEditorSessions(this._client);
  virtualMailboxes: VirtualMailboxesAPI.VirtualMailboxes = new VirtualMailboxesAPI.VirtualMailboxes(
    this._client,
  );
}

PrintMail.Contacts = Contacts;
PrintMail.Templates = Templates;
PrintMail.Trackers = Trackers;
PrintMail.Letters = Letters;
PrintMail.Postcards = Postcards;
PrintMail.BankAccounts = BankAccounts;
PrintMail.Cheques = Cheques;
PrintMail.SelfMailers = SelfMailers;
PrintMail.Campaigns = Campaigns;
PrintMail.MailingListImports = MailingListImports;
PrintMail.MailingLists = MailingLists;
PrintMail.Reports = Reports;
PrintMail.SubOrganizations = SubOrganizations;
PrintMail.Boxes = Boxes;
PrintMail.SnapPacks = SnapPacks;
PrintMail.TargetedListBuilds = TargetedListBuilds;
PrintMail.TemplateEditorSessions = TemplateEditorSessions;
PrintMail.VirtualMailboxes = VirtualMailboxes;

export declare namespace PrintMail {
  export {
    Contacts as Contacts,
    type Contact as Contact,
    type ContactCreate as ContactCreate,
    type ContactCreateWithCompanyName as ContactCreateWithCompanyName,
    type ContactCreateWithFirstName as ContactCreateWithFirstName,
    type ContactDeleteResponse as ContactDeleteResponse,
    type ContactsSkipLimit as ContactsSkipLimit,
    type ContactCreateParams as ContactCreateParams,
    type ContactListParams as ContactListParams,
  };

  export {
    Templates as Templates,
    type Template as Template,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    type TemplatesSkipLimit as TemplatesSkipLimit,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };

  export {
    Trackers as Trackers,
    type TrackerCreateResponse as TrackerCreateResponse,
    type TrackerRetrieveResponse as TrackerRetrieveResponse,
    type TrackerUpdateResponse as TrackerUpdateResponse,
    type TrackerListResponse as TrackerListResponse,
    type TrackerDeleteResponse as TrackerDeleteResponse,
    type TrackerRetrieveVisitsResponse as TrackerRetrieveVisitsResponse,
    type TrackerListResponsesSkipLimit as TrackerListResponsesSkipLimit,
    type TrackerRetrieveVisitsResponsesSkipLimit as TrackerRetrieveVisitsResponsesSkipLimit,
    type TrackerCreateParams as TrackerCreateParams,
    type TrackerUpdateParams as TrackerUpdateParams,
    type TrackerListParams as TrackerListParams,
    type TrackerRetrieveVisitsParams as TrackerRetrieveVisitsParams,
  };

  export {
    Letters as Letters,
    type AddressPlacement as AddressPlacement,
    type AttachedPdf as AttachedPdf,
    type Letter as Letter,
    type LetterSize as LetterSize,
    type PlasticCard as PlasticCard,
    type LetterRetrieveURLResponse as LetterRetrieveURLResponse,
    type LettersSkipLimit as LettersSkipLimit,
    type LetterCreateParams as LetterCreateParams,
    type LetterListParams as LetterListParams,
    type LetterCancelParams as LetterCancelParams,
  };

  export {
    Postcards as Postcards,
    type Postcard as Postcard,
    type PostcardRetrieveURLResponse as PostcardRetrieveURLResponse,
    type PostcardsSkipLimit as PostcardsSkipLimit,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardListParams as PostcardListParams,
    type PostcardCancelParams as PostcardCancelParams,
  };

  export {
    BankAccounts as BankAccounts,
    type BankAccount as BankAccount,
    type BankAccountCountryCode as BankAccountCountryCode,
    type BankAccountDeleteResponse as BankAccountDeleteResponse,
    type BankAccountsSkipLimit as BankAccountsSkipLimit,
    type BankAccountCreateParams as BankAccountCreateParams,
    type BankAccountListParams as BankAccountListParams,
  };

  export {
    Cheques as Cheques,
    type Cheque as Cheque,
    type ChequeSize as ChequeSize,
    type DigitalOnly as DigitalOnly,
    type ChequeRetrieveURLResponse as ChequeRetrieveURLResponse,
    type ChequesSkipLimit as ChequesSkipLimit,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeListParams as ChequeListParams,
    type ChequeCancelParams as ChequeCancelParams,
  };

  export {
    SelfMailers as SelfMailers,
    type SelfMailer as SelfMailer,
    type SelfMailerRetrieveURLResponse as SelfMailerRetrieveURLResponse,
    type SelfMailersSkipLimit as SelfMailersSkipLimit,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };

  export {
    Campaigns as Campaigns,
    type Campaign as Campaign,
    type CampaignDeleteResponse as CampaignDeleteResponse,
    type CampaignsSkipLimit as CampaignsSkipLimit,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignSendParams as CampaignSendParams,
  };

  export {
    MailingListImports as MailingListImports,
    type FileType as FileType,
    type MailingListImportResponse as MailingListImportResponse,
    type VerificationStatusCount as VerificationStatusCount,
    type MailingListImportDeleteResponse as MailingListImportDeleteResponse,
    type MailingListImportResponsesSkipLimit as MailingListImportResponsesSkipLimit,
    type MailingListImportCreateParams as MailingListImportCreateParams,
    type MailingListImportUpdateParams as MailingListImportUpdateParams,
    type MailingListImportListParams as MailingListImportListParams,
  };

  export {
    MailingLists as MailingLists,
    type MailingList as MailingList,
    type MailingListUpdate as MailingListUpdate,
    type MailingListDeleteResponse as MailingListDeleteResponse,
    type MailingListsSkipLimit as MailingListsSkipLimit,
    type MailingListCreateParams as MailingListCreateParams,
    type MailingListUpdateParams as MailingListUpdateParams,
    type MailingListListParams as MailingListListParams,
    type MailingListJobsParams as MailingListJobsParams,
  };

  export {
    Reports as Reports,
    type DeletedResponse as DeletedResponse,
    type Report as Report,
    type ReportsSkipLimit as ReportsSkipLimit,
    type ReportCreateParams as ReportCreateParams,
    type ReportUpdateParams as ReportUpdateParams,
    type ReportListParams as ReportListParams,
    type ReportSampleParams as ReportSampleParams,
  };

  export {
    SubOrganizations as SubOrganizations,
    type EmailPreferences as EmailPreferences,
    type SubOrganization as SubOrganization,
    type SubOrganizationCreateResponse as SubOrganizationCreateResponse,
    type SubOrganizationRetrieveUsersResponse as SubOrganizationRetrieveUsersResponse,
    type SubOrganizationsSkipLimit as SubOrganizationsSkipLimit,
    type SubOrganizationCreateParams as SubOrganizationCreateParams,
    type SubOrganizationListParams as SubOrganizationListParams,
    type SubOrganizationRetrieveUsersParams as SubOrganizationRetrieveUsersParams,
  };

  export {
    Boxes as Boxes,
    type BoxCreateResponse as BoxCreateResponse,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxDeleteResponse as BoxDeleteResponse,
    type BoxProgressionsResponse as BoxProgressionsResponse,
    type BoxListResponsesSkipLimit as BoxListResponsesSkipLimit,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
  };

  export {
    SnapPacks as SnapPacks,
    type SnapPackCreateResponse as SnapPackCreateResponse,
    type SnapPackRetrieveResponse as SnapPackRetrieveResponse,
    type SnapPackListResponse as SnapPackListResponse,
    type SnapPackDeleteResponse as SnapPackDeleteResponse,
    type SnapPackProgressionsResponse as SnapPackProgressionsResponse,
    type SnapPackRetrieveCapabilitiesResponse as SnapPackRetrieveCapabilitiesResponse,
    type SnapPackListResponsesSkipLimit as SnapPackListResponsesSkipLimit,
    type SnapPackCreateParams as SnapPackCreateParams,
    type SnapPackListParams as SnapPackListParams,
    type SnapPackRetrieveCapabilitiesParams as SnapPackRetrieveCapabilitiesParams,
  };

  export {
    TargetedListBuilds as TargetedListBuilds,
    type TargetedListBuildCreateResponse as TargetedListBuildCreateResponse,
    type TargetedListBuildRetrieveResponse as TargetedListBuildRetrieveResponse,
    type TargetedListBuildUpdateResponse as TargetedListBuildUpdateResponse,
    type TargetedListBuildListResponse as TargetedListBuildListResponse,
    type TargetedListBuildDeleteResponse as TargetedListBuildDeleteResponse,
    type TargetedListBuildConfirmResponse as TargetedListBuildConfirmResponse,
    type TargetedListBuildListResponsesSkipLimit as TargetedListBuildListResponsesSkipLimit,
    type TargetedListBuildCreateParams as TargetedListBuildCreateParams,
    type TargetedListBuildUpdateParams as TargetedListBuildUpdateParams,
    type TargetedListBuildListParams as TargetedListBuildListParams,
  };

  export {
    TemplateEditorSessions as TemplateEditorSessions,
    type TemplateEditorSessionCreateResponse as TemplateEditorSessionCreateResponse,
    type TemplateEditorSessionListResponse as TemplateEditorSessionListResponse,
    type TemplateEditorSessionDeleteResponse as TemplateEditorSessionDeleteResponse,
    type TemplateEditorSessionListResponsesSkipLimit as TemplateEditorSessionListResponsesSkipLimit,
    type TemplateEditorSessionCreateParams as TemplateEditorSessionCreateParams,
    type TemplateEditorSessionListParams as TemplateEditorSessionListParams,
  };

  export {
    VirtualMailboxes as VirtualMailboxes,
    type VirtualMailboxCreateResponse as VirtualMailboxCreateResponse,
    type VirtualMailboxRetrieveResponse as VirtualMailboxRetrieveResponse,
    type VirtualMailboxListResponse as VirtualMailboxListResponse,
    type VirtualMailboxRetrieveAddressResponse as VirtualMailboxRetrieveAddressResponse,
    type VirtualMailboxListResponsesSkipLimit as VirtualMailboxListResponsesSkipLimit,
    type VirtualMailboxCreateParams as VirtualMailboxCreateParams,
    type VirtualMailboxListParams as VirtualMailboxListParams,
  };
}
