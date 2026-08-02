import { tool as base64FileConverter } from './base64-file-converter';
import { tool as base64StringConverter } from './base64-string-converter';
import { tool as basicAuthGenerator } from './basic-auth-generator';
import { tool as emailNormalizer } from './email-normalizer';

import { tool as textToUnicode } from './text-to-unicode';
import { tool as safelinkDecoder } from './safelink-decoder';
import { tool as xmlToJson } from './xml-to-json';
import { tool as jsonToXml } from './json-to-xml';
import { tool as regexTester } from './regex-tester';
import { tool as regexMemo } from './regex-memo';
import { tool as markdownToHtml } from './markdown-to-html';
import { tool as pdfSignatureChecker } from './pdf-signature-checker';
import { tool as macAddressGenerator } from './mac-address-generator';
import { tool as textToBinary } from './text-to-binary';
import { tool as ulidGenerator } from './ulid-generator';
import { tool as ibanValidatorAndParser } from './iban-validator-and-parser';
import { tool as yamlToToml } from './yaml-to-toml';
import { tool as jsonToToml } from './json-to-toml';
import { tool as tomlToYaml } from './toml-to-yaml';
import { tool as tomlToJson } from './toml-to-json';
import { tool as jsonToCsv } from './json-to-csv';
import { tool as listConverter } from './list-converter';
import { tool as phoneParserAndFormatter } from './phone-parser-and-formatter';
import { tool as jsonDiff } from './json-diff';
import { tool as ipv4RangeExpander } from './ipv4-range-expander';
import { tool as httpStatusCodes } from './http-status-codes';
import { tool as yamlToJson } from './yaml-to-json-converter';
import { tool as jsonToYaml } from './json-to-yaml-converter';
import { tool as ipv6UlaGenerator } from './ipv6-ula-generator';
import { tool as ipv4AddressConverter } from './ipv4-address-converter';
import { tool as userAgentParser } from './user-agent-parser';
import { tool as ipv4SubnetCalculator } from './ipv4-subnet-calculator';
import { tool as dockerRunToDockerComposeConverter } from './docker-run-to-docker-compose-converter';
import { tool as htmlWysiwygEditor } from './html-wysiwyg-editor';
import { tool as rsaKeyPairGenerator } from './rsa-key-pair-generator';
import { tool as slugifyString } from './slugify-string';
import { tool as keycodeInfo } from './keycode-info';
import { tool as jsonMinify } from './json-minify';
import { tool as bcrypt } from './bcrypt';
import { tool as bip39 } from './bip39-generator';
import { tool as chmodCalculator } from './chmod-calculator';
import { tool as crontabGenerator } from './crontab-generator';
import { tool as dateTimeConverter } from './date-time-converter';
import { tool as deviceInformation } from './device-information';
import { tool as cypher } from './encryption';
import { tool as gitMemo } from './git-memo';
import { tool as hashText } from './hash-text';
import { tool as hmacGenerator } from './hmac-generator';
import { tool as htmlEntities } from './html-entities';
import { tool as baseConverter } from './integer-base-converter';
import { tool as jsonViewer } from './json-viewer';
import { tool as jwtParser } from './jwt-parser';
import { tool as metaTagGenerator } from './meta-tag-generator';
import { tool as mimeTypes } from './mime-types';
import { tool as otpCodeGeneratorAndValidator } from './otp-code-generator-and-validator';
import { tool as randomPortGenerator } from './random-port-generator';
import { tool as sqlPrettify } from './sql-prettify';
import type { ToolCategory } from './tools.types';
import { tool as urlEncoder } from './url-encoder';
import { tool as urlParser } from './url-parser';
import { tool as macAddressLookup } from './mac-address-lookup';
import { tool as xmlFormatter } from './xml-formatter';
import { tool as yamlViewer } from './yaml-viewer';
import { tool as uuidGenerator } from './uuid-generator';
import { tool as passwordStrengthAnalyser } from './password-strength-analyser';

export const toolsByCategory: ToolCategory[] = [
  {
    name: 'Crypto',
    components: [hashText, bcrypt, uuidGenerator, ulidGenerator, cypher, bip39, hmacGenerator, rsaKeyPairGenerator, passwordStrengthAnalyser, pdfSignatureChecker],
  },
  {
    name: 'Converter',
    components: [
      dateTimeConverter,
      baseConverter,
      base64StringConverter,
      base64FileConverter,
      textToBinary,
      textToUnicode,
      yamlToJson,
      yamlToToml,
      jsonToYaml,
      jsonToToml,
      listConverter,
      tomlToJson,
      tomlToYaml,
      xmlToJson,
      jsonToXml,
      markdownToHtml,
    ],
  },
  {
    name: 'Web',
    components: [
      urlEncoder,
      htmlEntities,
      urlParser,
      deviceInformation,
      basicAuthGenerator,
      metaTagGenerator,
      otpCodeGeneratorAndValidator,
      mimeTypes,
      jwtParser,
      keycodeInfo,
      slugifyString,
      htmlWysiwygEditor,
      userAgentParser,
      httpStatusCodes,
      jsonDiff,
      safelinkDecoder,
    ],
  },
  {
    name: 'Development',
    components: [
      gitMemo,
      randomPortGenerator,
      crontabGenerator,
      jsonViewer,
      jsonMinify,
      jsonToCsv,
      sqlPrettify,
      chmodCalculator,
      dockerRunToDockerComposeConverter,
      xmlFormatter,
      yamlViewer,
      emailNormalizer,
      regexTester,
      regexMemo,
    ],
  },
  {
    name: 'Network',
    components: [ipv4SubnetCalculator, ipv4AddressConverter, ipv4RangeExpander, macAddressLookup, macAddressGenerator, ipv6UlaGenerator],
  },
  {
    name: 'Data',
    components: [phoneParserAndFormatter, ibanValidatorAndParser],
  },
];

export const tools = toolsByCategory.flatMap(({ components }) => components);
export const toolsWithCategory = toolsByCategory.flatMap(({ components, name }) =>
  components.map(tool => ({ category: name, ...tool })),
);
