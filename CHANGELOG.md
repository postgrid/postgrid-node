# Changelog

## 0.6.0 (2026-05-13)

Full Changelog: [v0.5.2...v0.6.0](https://github.com/postgrid/postgrid-node/compare/v0.5.2...v0.6.0)

### Features

* **api:** Generate OpenAPI spec from master, Complete AV endpoints, Deprecate order profiles ([67bb8b7](https://github.com/postgrid/postgrid-node/commit/67bb8b7333288443ffbf34c6de27d086affde747))
* **api:** sheikh's updates ([1fc2ef8](https://github.com/postgrid/postgrid-node/commit/1fc2ef827f76271263dacb177f3decaae8952f65))
* support setting headers via env ([4db92ef](https://github.com/postgrid/postgrid-node/commit/4db92ef57767c45c53cef4550eea6677e36b4bf7))
* Testing new GHA workflow ([08e8358](https://github.com/postgrid/postgrid-node/commit/08e8358dcd5e65f39d0f6d7271351af5211bd23f))


### Chores

* **format:** run eslint and prettier separately ([cdad39f](https://github.com/postgrid/postgrid-node/commit/cdad39f28d68b35eabe04d8c0b5a6a186aa1e3b4))
* **formatter:** run prettier and eslint separately ([0e9df35](https://github.com/postgrid/postgrid-node/commit/0e9df3511c18468aa53b59d868a24f7d541a09d1))
* **internal:** codegen related update ([7fe5def](https://github.com/postgrid/postgrid-node/commit/7fe5def69f1a20ca7a915e4b489ae315d3816478))
* **internal:** more robust bootstrap script ([c8c6500](https://github.com/postgrid/postgrid-node/commit/c8c6500182176ce3706350b3d10ea47dd0c75f5d))
* redact api-key headers in debug logs ([0db98d1](https://github.com/postgrid/postgrid-node/commit/0db98d1fb30abbecca2a22afee2a44c397837f32))

## 0.5.2 (2026-04-08)

Full Changelog: [v0.5.1...v0.5.2](https://github.com/postgrid/postgrid-node/compare/v0.5.1...v0.5.2)

### Chores

* **internal:** codegen related update ([07b2754](https://github.com/postgrid/postgrid-node/commit/07b2754b6c9de728e5f5d54bb8e156911bbbd640))

## 0.5.1 (2026-03-24)

Full Changelog: [v0.5.0...v0.5.1](https://github.com/postgrid/postgrid-node/compare/v0.5.0...v0.5.1)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([c27adce](https://github.com/postgrid/postgrid-node/commit/c27adced033eb5a2fcda3a2998f75edcdd7400a2))
* **client:** avoid removing abort listener too early ([b5b7d6e](https://github.com/postgrid/postgrid-node/commit/b5b7d6e89b3c118b2bb79cc58b357bc880a3ad54))
* **client:** preserve URL params already embedded in path ([24c231e](https://github.com/postgrid/postgrid-node/commit/24c231ed84c1e49315002c8e02fc14fa1d9b9a09))
* **docs/contributing:** correct pnpm link command ([6dbc868](https://github.com/postgrid/postgrid-node/commit/6dbc86804e251b99dcf2d8ccc951043a1e2cb71e))
* **docs:** remove extraneous example object fields ([71d6fdf](https://github.com/postgrid/postgrid-node/commit/71d6fdf04c36d6c86a07da4779c5a96ccada0f1d))
* fix request delays for retrying to be more respectful of high requested delays ([2949209](https://github.com/postgrid/postgrid-node/commit/29492093772c6e99d1e0d7454b94a9a78070e6ce))
* **mcp:** correct code tool API endpoint ([a69fda5](https://github.com/postgrid/postgrid-node/commit/a69fda59f36bdab6b0189a492a8fb8053939f412))
* **mcp:** return correct lines on typescript errors ([81982d6](https://github.com/postgrid/postgrid-node/commit/81982d6d50b27ef9a5580f7d0e178fc096e8ff4d))


### Chores

* break long lines in snippets into multiline ([f66b5c2](https://github.com/postgrid/postgrid-node/commit/f66b5c28b18bb506d4cbed6667215af5a6eaa799))
* **ci:** skip lint on metadata-only changes ([ed86a3a](https://github.com/postgrid/postgrid-node/commit/ed86a3aa624697655e16cce359a3e1baae999777))
* **ci:** skip uploading artifacts on stainless-internal branches ([1164e40](https://github.com/postgrid/postgrid-node/commit/1164e4053e2fa237daa11f4df3113447c0455a5e))
* **ci:** upgrade `actions/github-script` ([ff6b463](https://github.com/postgrid/postgrid-node/commit/ff6b4638495611a098d8b035442944f2484d44fc))
* **client:** do not parse responses with empty content-length ([d619307](https://github.com/postgrid/postgrid-node/commit/d61930741f51c62e583f31074c1aa465c1e18207))
* **client:** fix logger property type ([c1592ab](https://github.com/postgrid/postgrid-node/commit/c1592ab37ba7aa9a1c3da022b42ba98b5aa189d0))
* **client:** restructure abort controller binding ([7f5512d](https://github.com/postgrid/postgrid-node/commit/7f5512d60ff37c68a839f80ef7d4df0bc363fb50))
* **docs:** add missing descriptions ([4df4baf](https://github.com/postgrid/postgrid-node/commit/4df4bafab42048bd31eb55ef5a6499f73925264f))
* fix typo in descriptions ([00cac03](https://github.com/postgrid/postgrid-node/commit/00cac03fae7750b0f627c2f15442de2d92711025))
* **internal/client:** fix form-urlencoded requests ([bc3444a](https://github.com/postgrid/postgrid-node/commit/bc3444a04024c65778a2611ea102e288665d40d5))
* **internal:** avoid type checking errors with ts-reset ([5457196](https://github.com/postgrid/postgrid-node/commit/5457196acf1411e4e2044338c74a8769f92abaaf))
* **internal:** codegen related update ([22d0aec](https://github.com/postgrid/postgrid-node/commit/22d0aec76590e53ab5da540e3f73406342a950ac))
* **internal:** codegen related update ([5c3a9b7](https://github.com/postgrid/postgrid-node/commit/5c3a9b79198ef3bc912462e1fb524819ffa8ef91))
* **internal:** codegen related update ([b90ade6](https://github.com/postgrid/postgrid-node/commit/b90ade6630f6f254eebe74ee16ca365a96759f87))
* **internal:** configure pnpm minimumReleaseAge to 1 day ([28aacd5](https://github.com/postgrid/postgrid-node/commit/28aacd557705eba61ee5ced975c1828d6f08f801))
* **internal:** fix pagination internals not accepting option promises ([69e80b4](https://github.com/postgrid/postgrid-node/commit/69e80b4dfe3447ec5a705c0e3f3f42f74c817bba))
* **internal:** move stringifyQuery implementation to internal function ([51e05e6](https://github.com/postgrid/postgrid-node/commit/51e05e6462aa5d1d14756495cb515b00a64fa84c))
* **internal:** remove mock server code ([cc0bca1](https://github.com/postgrid/postgrid-node/commit/cc0bca11e774882e65c8d5d8f9cbe0e12e76c7a6))
* **internal:** tweak CI branches ([2c3fddb](https://github.com/postgrid/postgrid-node/commit/2c3fddb40341708e5b84e9f6b56c51ad4facda22))
* **internal:** update `actions/checkout` version ([ec11eeb](https://github.com/postgrid/postgrid-node/commit/ec11eeb0c7c2332a07c7c88775e5b22305755abb))
* **internal:** update dependencies to address dependabot vulnerabilities ([b831c88](https://github.com/postgrid/postgrid-node/commit/b831c88574eed47b1f92a64a62a05bdf22036be2))
* **internal:** update gitignore ([ec3c14a](https://github.com/postgrid/postgrid-node/commit/ec3c14afa8bad62fa6b57d93763ee985cd975821))
* **internal:** update lock file ([e0ccd78](https://github.com/postgrid/postgrid-node/commit/e0ccd783e74a12ff4f48bee59ffb9119dfe69dfd))
* **internal:** upgrade babel, qs, js-yaml ([82d5417](https://github.com/postgrid/postgrid-node/commit/82d54171f2b0e60f84d8ce931df0dfcaa5b716a1))
* **internal:** upgrade brace-expansion and @babel/helpers ([c2e9be4](https://github.com/postgrid/postgrid-node/commit/c2e9be4f690eacaea859716658e99e53ea898d68))
* **internal:** upgrade eslint ([d4721a3](https://github.com/postgrid/postgrid-node/commit/d4721a3f0feeffa66fdcc698998d8714d208f6d4))
* **internal:** upgrade pnpm ([83c6be7](https://github.com/postgrid/postgrid-node/commit/83c6be7abe9b9d61d341fd8bb6f7d2b66bc9eb28))
* **internal:** upgrade pnpm version ([a425792](https://github.com/postgrid/postgrid-node/commit/a425792362a6a88464aa6ab49963fdac1a7f95dc))
* update mock server docs ([7fc0707](https://github.com/postgrid/postgrid-node/commit/7fc0707639e12f9915aaecd5b659ea3086e3f105))

## 0.5.0 (2025-11-14)

Full Changelog: [v0.4.2...v0.5.0](https://github.com/postgrid/postgrid-node/compare/v0.4.2...v0.5.0)

### Bug Fixes

* **api:** remove unsupported collaterals ([9bdd969](https://github.com/postgrid/postgrid-node/commit/9bdd969ce3c15a11b20420df6651e56697a03171))
* **readme:** rename PostGrid ([9493829](https://github.com/postgrid/postgrid-node/commit/949382910924c7dc8c5f191038103ae73572d933))

## 0.4.2 (2025-11-12)

Full Changelog: [v0.4.1...v0.4.2](https://github.com/postgrid/postgrid-node/compare/v0.4.1...v0.4.2)

### Bug Fixes

* **readme:** update the readme ([2308e71](https://github.com/postgrid/postgrid-node/commit/2308e71046e82f88e4630e9b2277764075cd6af3))

## 0.4.1 (2025-11-12)

Full Changelog: [v0.4.0...v0.4.1](https://github.com/postgrid/postgrid-node/compare/v0.4.0...v0.4.1)

### Bug Fixes

* **api:** small readme updates ([2a166c7](https://github.com/postgrid/postgrid-node/commit/2a166c7e2577102958777f3e9b921f5772a7ad12))

## 0.4.0 (2025-11-12)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/postgrid/postgrid-node/compare/v0.3.0...v0.4.0)

### Features

* **api:** manual updates ([c41231a](https://github.com/postgrid/postgrid-node/commit/c41231a0a3a5a3a1584f5f2b53b2ffda0e864bdc))


### Bug Fixes

* **api:** more config updates ([2bb54d7](https://github.com/postgrid/postgrid-node/commit/2bb54d76dc975d4b89a3b7ea7d7b29636a060f0b))

## 0.3.0 (2025-11-06)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/postgrid/postgrid-node/compare/v0.2.0...v0.3.0)

### Features

* **api:** manual updates ([abcab58](https://github.com/postgrid/postgrid-node/commit/abcab5822d2a5c0d33df26fe3b900f86f8c796e1))

## 0.2.0 (2025-11-06)

Full Changelog: [v0.1.0-alpha.7...v0.2.0](https://github.com/postgrid/postgrid-node/compare/v0.1.0-alpha.7...v0.2.0)

### Chores

* update SDK settings ([b77eaca](https://github.com/postgrid/postgrid-node/commit/b77eacae34e549dec20cbaabf417bac4a26d4bfe))

## 0.1.0-alpha.7 (2025-11-05)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/postgrid/postgrid-node/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** manual updates ([d5bec88](https://github.com/postgrid/postgrid-node/commit/d5bec887542cd3fc6075f77c110d1a30510d8c8a))

## 0.1.0-alpha.6 (2025-11-04)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/postgrid/postgrid-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** manual updates ([0e2cb4a](https://github.com/postgrid/postgrid-node/commit/0e2cb4a4eba86345e95e9f65b097e580a1f9504d))
* **api:** manual updates ([f6cda5b](https://github.com/postgrid/postgrid-node/commit/f6cda5b4c5b65b7553a728072da1a75a9297d7e8))
* **api:** manual updates ([2292eba](https://github.com/postgrid/postgrid-node/commit/2292ebacebbe33cb6506791f298f0a1cadc90bc1))
* **api:** manual updates ([cb905a8](https://github.com/postgrid/postgrid-node/commit/cb905a8fe663a31c71a9fcecffb8dc191f7b5502))
* **api:** manual updates ([5e28201](https://github.com/postgrid/postgrid-node/commit/5e2820166ebf3ed1d44c81a747cc6eaee07ba25f))
* **api:** manual updates ([0d9444a](https://github.com/postgrid/postgrid-node/commit/0d9444af25deee78035a553a7cf0c4e3e0fee2b8))
* **api:** manual updates ([4ba55b4](https://github.com/postgrid/postgrid-node/commit/4ba55b4f14fcfb7e30989256798af7c17ad12b7d))
* **api:** manual updates ([5c99f89](https://github.com/postgrid/postgrid-node/commit/5c99f89c149535a95457e1dad589442f6929e057))
* **api:** manual updates ([8a8263b](https://github.com/postgrid/postgrid-node/commit/8a8263b3486dfaff379eed4c0de05f2edb0c3f46))
* **api:** manual updates ([6bfa765](https://github.com/postgrid/postgrid-node/commit/6bfa765001e8e1388aaa2cfa89dd586269a72cc3))
* **api:** manual updates ([6c6f765](https://github.com/postgrid/postgrid-node/commit/6c6f765a5344da461466d54eff27f7be2b3f66cf))
* **api:** manual updates ([b4e2f75](https://github.com/postgrid/postgrid-node/commit/b4e2f754489d343477e3aacf7f58622b2fb00f40))
* **api:** manual updates ([0b3222d](https://github.com/postgrid/postgrid-node/commit/0b3222d1182fa3e1a42d81607e0f18bb70369178))
* **api:** manual updates ([af5db50](https://github.com/postgrid/postgrid-node/commit/af5db50eb9fd8733cbbed0430cdebadd794241a1))
* **api:** manual updates ([7affe60](https://github.com/postgrid/postgrid-node/commit/7affe6098d10d0fcf531f30de6f511e3759cbacf))
* **api:** manual updates to merge PM and AV ([9692120](https://github.com/postgrid/postgrid-node/commit/9692120e792062a8a9d05456a19cc6036e707045))
* **api:** Select API key based on URL ([a4ef8c0](https://github.com/postgrid/postgrid-node/commit/a4ef8c01bf57319a3b44a8dca5620fb65a6e9907))
* **api:** support both API auth schemes ([8dc1bf5](https://github.com/postgrid/postgrid-node/commit/8dc1bf5d1b5ebfe51a3e525d3787606e49369f54))
* **api:** Update OpenAPI spec ([5e33ca6](https://github.com/postgrid/postgrid-node/commit/5e33ca64240823dd689ed70bbf413bccf1c78e3b))


### Bug Fixes

* **api:** Examples for AV ([2e0d345](https://github.com/postgrid/postgrid-node/commit/2e0d34544da280ab9dca98c305f12bc1f80e28a7))
* **api:** header assignment in prepareRequest method ([39ea7ed](https://github.com/postgrid/postgrid-node/commit/39ea7edb8a15adf25bdb0e6df001c713b93a4e94))
* **api:** restructuring under printMail and addver ([c576dbe](https://github.com/postgrid/postgrid-node/commit/c576dbe5df4d59a84c55f36cc9d33ade25a045dc))
* coerce nullable values to undefined ([16b5f52](https://github.com/postgrid/postgrid-node/commit/16b5f52b376752133d92213fcdc48001c3d723b5))


### Performance Improvements

* faster formatting ([669e461](https://github.com/postgrid/postgrid-node/commit/669e4618266377faf093b575d65a1e06db6fb957))


### Chores

* **api:** more docs ([9f44e29](https://github.com/postgrid/postgrid-node/commit/9f44e29c300d7df16f65e2dfef7c3ba73afc46d5))
* **api:** rename API endpoints for AV ([548d9e3](https://github.com/postgrid/postgrid-node/commit/548d9e3085ecb23b038da86ad74284545494f101))
* **api:** Update OpenAPI schema ([2a29dbc](https://github.com/postgrid/postgrid-node/commit/2a29dbc33aea71d4348e295c203c5c6166b07531))
* **deps:** update dependency node-fetch to v2.6.13 ([9d18c47](https://github.com/postgrid/postgrid-node/commit/9d18c477e6993a11e5e99a5f1767ccb6f5ca5cd7))
* do not install brew dependencies in ./scripts/bootstrap by default ([92cd0ec](https://github.com/postgrid/postgrid-node/commit/92cd0ec15019dc755fd2c5d25000dc79a26e9200))
* **internal:** codegen related update ([b00d3ff](https://github.com/postgrid/postgrid-node/commit/b00d3ffeb99b8a74d7d372bd066e8a8b808cd519))
* **internal:** codegen related update ([a8ec314](https://github.com/postgrid/postgrid-node/commit/a8ec314e8edbe03fab399e323b9b73912749172b))
* **internal:** fix incremental formatting in some cases ([2e13552](https://github.com/postgrid/postgrid-node/commit/2e135520c1c15d414dec4ee05377644613a2be20))
* **internal:** formatting change ([36db802](https://github.com/postgrid/postgrid-node/commit/36db802aa9e9c4eccf281ab0f846fb039ea4152d))
* **internal:** ignore .eslintcache ([a0a4bd3](https://github.com/postgrid/postgrid-node/commit/a0a4bd3b359f8e1f97b8010ef70aade58c3b701f))
* **internal:** remove .eslintcache ([c2a1b69](https://github.com/postgrid/postgrid-node/commit/c2a1b697036a5d99876e5c14a748a004f45d581b))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([867309f](https://github.com/postgrid/postgrid-node/commit/867309fd42d75fdca870c4dbc532769626408428))
* **internal:** update comment in script ([0f4e66e](https://github.com/postgrid/postgrid-node/commit/0f4e66ee5aaf00c64d332c1924062f024ae1df13))
* **internal:** use npm pack for build uploads ([db5fba9](https://github.com/postgrid/postgrid-node/commit/db5fba95b07d3e51da3e54005a46d186f2755c40))
* update @stainless-api/prism-cli to v5.15.0 ([4640767](https://github.com/postgrid/postgrid-node/commit/46407677b2142f0a99834bd5a626a119f36fe463))
* update CI script ([1adf9d4](https://github.com/postgrid/postgrid-node/commit/1adf9d4dc106b6c31f99e709017b1b85070ac8a5))
* update SDK settings ([45e20aa](https://github.com/postgrid/postgrid-node/commit/45e20aab8340be7c79151e52ca8fb503a6aa57c7))

## 0.1.0-alpha.5 (2025-08-07)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/postgrid/postgrid-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Chores

* **internal:** move publish config ([d54ef96](https://github.com/postgrid/postgrid-node/commit/d54ef96aaead49055df7ec142379824f6e6d98c3))
* **internal:** remove redundant imports config ([744c409](https://github.com/postgrid/postgrid-node/commit/744c409582f6af93168e3d75d9b2f53ee367e182))

## 0.1.0-alpha.4 (2025-07-24)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/postgrid/postgrid-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** update via SDK Studio ([9f8374e](https://github.com/postgrid/postgrid-node/commit/9f8374eae3157197e837847c6e33c14bcf02dd4f))
* **api:** update via SDK Studio ([726afdd](https://github.com/postgrid/postgrid-node/commit/726afdd8d99ef6083f48fd4cc876c75c638bba32))
* **api:** update via SDK Studio ([935bbb1](https://github.com/postgrid/postgrid-node/commit/935bbb15a3d477b80752b6c296a3c9ae0ba7e249))
* **api:** update via SDK Studio ([34c087b](https://github.com/postgrid/postgrid-node/commit/34c087b89fb6a9a2f1ac791aeef8ddc65e1921c7))
* **api:** update via SDK Studio ([55bc247](https://github.com/postgrid/postgrid-node/commit/55bc247034dc8fd9f1d64519de930ace804b66c2))
* **api:** update via SDK Studio ([9008e58](https://github.com/postgrid/postgrid-node/commit/9008e589681d70d0c877140622a7f474d259110d))
* **api:** update via SDK Studio ([a5c9e07](https://github.com/postgrid/postgrid-node/commit/a5c9e072f20efa4a5c7538c1cc403aa7e93834de))
* **api:** update via SDK Studio ([fb78bb5](https://github.com/postgrid/postgrid-node/commit/fb78bb55828321be0e4c2aca85222bda21b74a99))
* **api:** update via SDK Studio ([e8a8138](https://github.com/postgrid/postgrid-node/commit/e8a8138784f4fafd5f7757b1cb8d78e098f40b18))
* **api:** updates to fix pagination ([2b76796](https://github.com/postgrid/postgrid-node/commit/2b767960e020229b46a5bf15d935d8038ac7c78a))
* **client:** add support for endpoint-specific base URLs ([02e27ba](https://github.com/postgrid/postgrid-node/commit/02e27bac8223956955f75e51dd4317acf071439a))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([547acb3](https://github.com/postgrid/postgrid-node/commit/547acb3837767fffedd85a4e7c5e1fb552ff83f5))
* **client:** don't send `Content-Type` for bodyless methods ([9609b5e](https://github.com/postgrid/postgrid-node/commit/9609b5e32696447f522786a7cdd52318d1466f3a))
* publish script — handle NPM errors correctly ([8175eac](https://github.com/postgrid/postgrid-node/commit/8175eacdedad17eccc0cbc0e0a3258a64c2324d9))


### Chores

* **ci:** bump node version for release workflows ([ad1ef06](https://github.com/postgrid/postgrid-node/commit/ad1ef06e3444816671a6c3b16efd70b1a3d01825))
* **ci:** enable for pull requests ([6d489df](https://github.com/postgrid/postgrid-node/commit/6d489dfd63f07772773c29aaf7f77550836bdaff))
* **ci:** only run for pushes and fork pull requests ([c3dfbd6](https://github.com/postgrid/postgrid-node/commit/c3dfbd6bcd95fc8f0dc471291368ba5f5f4d975b))
* **docs:** grammar improvements ([f6f7296](https://github.com/postgrid/postgrid-node/commit/f6f7296fa8324a508531e1dc5e6f30b90c0a9a01))
* **docs:** use top-level-await in example snippets ([7ce5795](https://github.com/postgrid/postgrid-node/commit/7ce5795e659ab089758fc495d2ad6f8ea5d997e5))
* improve publish-npm script --latest tag logic ([a51c7fd](https://github.com/postgrid/postgrid-node/commit/a51c7fd17aeb3e0c79fb32789ac61139bca0452e))
* **internal:** make base APIResource abstract ([c3b0fe4](https://github.com/postgrid/postgrid-node/commit/c3b0fe45050c1bce99de582419f26514fc977a9b))
* mention unit type in timeout docs ([ea8c83b](https://github.com/postgrid/postgrid-node/commit/ea8c83bdde2d435cee8003c343c353fd65decb09))


### Documentation

* add examples to tsdocs ([3478106](https://github.com/postgrid/postgrid-node/commit/347810627ea464f630c305ea44a50e08a2ae0c5b))


### Refactors

* **types:** replace Record with mapped types ([329b531](https://github.com/postgrid/postgrid-node/commit/329b531028b46b5ca00ccade32b6c07d8380beb6))

## 0.1.0-alpha.3 (2025-05-02)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/postgrid/postgrid-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Chores

* **internal:** codegen related update ([de1f5d3](https://github.com/postgrid/postgrid-node/commit/de1f5d333a7fec766d202e130488df625edce3af))


### Documentation

* **readme:** fix typo ([949b5ca](https://github.com/postgrid/postgrid-node/commit/949b5ca1d24524fe9541167d289550481dafdd8f))

## 0.1.0-alpha.2 (2025-05-01)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/postgrid/postgrid-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** update via SDK Studio ([3745078](https://github.com/postgrid/postgrid-node/commit/3745078a44541176ddfc903de912d43c13b0a4ab))
* **api:** update via SDK Studio ([c1e2bd8](https://github.com/postgrid/postgrid-node/commit/c1e2bd8d18e94f74fc35ca456b6ef231943c78e9))
* **api:** update via SDK Studio ([e144cd3](https://github.com/postgrid/postgrid-node/commit/e144cd3dc698aa550261d1b9e57d17262957e8fa))

## 0.1.0-alpha.1 (2025-05-01)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/postgrid/postgrid-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([02677e6](https://github.com/postgrid/postgrid-node/commit/02677e6f7c7a288cd737e468c008b9e46d6b6432))
* **api:** update via SDK Studio ([4827b47](https://github.com/postgrid/postgrid-node/commit/4827b4756afe280355694410776e3319e32b2c70))
* **api:** update via SDK Studio ([8625aa5](https://github.com/postgrid/postgrid-node/commit/8625aa580e9bb220deb349250cf0e3dc88740af3))
* **api:** update via SDK Studio ([a741f40](https://github.com/postgrid/postgrid-node/commit/a741f40fb52f31afc096871fa5f2484065f5d3f2))


### Chores

* sync repo ([fb66960](https://github.com/postgrid/postgrid-node/commit/fb6696033481a7a9c4a645ad40b2d1332f5e5f65))
* update SDK settings ([d179b36](https://github.com/postgrid/postgrid-node/commit/d179b360acddd7141480fc6c4f61be4a6f93b2ef))
* update SDK settings ([eb8eb47](https://github.com/postgrid/postgrid-node/commit/eb8eb47d0d1a4b66d91d310240bbe52360b43431))
