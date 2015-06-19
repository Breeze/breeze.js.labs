Breeze Labs Change Log
==========================================

Breeze Labs version numbers are semi-independent of BreezeJS version numbers.

The build number (last of the 3 digits) floats independently. We strive to keep the major.minor digits in sync with BreezeJS

1.5.8
---------------------

- better abstractrest, azuremobileservices, and sharepoint adapter `querySuccess` methods
- sharepoint adapter _getResponseData adjusted per https://github.com/Breeze/breeze.js.labs/pull/25/
- sharepoint nuget packages updated

1.5.7
---------------------

- abstractrest adapter has richer _createErrorFromResponse

1.5.6
---------------------

- bug fix: abstractrest adapter's query success now extracts the response.data


1.5.5
---------------------

- Update saveQueuing (PR 23)


1.5.4
---------------------

- SharePoint OData data service adapter updates by Andrew Connell. See [CHANGELOG.spDsa.md](https://github.com/Breeze/breeze.js.labs/blob/master/CHANGELOG.spDsa.md "SharePoint Adapter Change Log") for details.

- breeze.directives: extend zValidate to support KendoUI's kNgModel attribute. See https://github.com/Breeze/breeze.js.labs/pull/17

1.5.3
----------------------

