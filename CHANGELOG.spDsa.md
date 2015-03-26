SharePoint Data Service Adapter Change Log
==========================================
The following lists the changes to the data service adapter.

0.10.0
-----
- Refactoring for cleaner & more performant data service adapter registration.

0.7.0
-----
- Added support for SharePoint 2010 OData endpoint, resolving feature request [#2](https://github.com/andrewconnell/breeze.js.labs/issues/2). See the [README.spDsa.md](README.spDsa.md) for usage information.

0.6.4
-----
- Updated the `DataServiceVersion` specified in the HTTP request header to 3.0, resolving bug [#11](https://github.com/andrewconnell/breeze.js.labs/issues/11).

0.6.3
-----
- Updated adapter to account for the case when the adapter.getRequestDigest() method is not defined. If not defined / set to null, the X-RequestDigest is not included in the HTTP request header. This header value is only needed when to project against XSRF (aka: using cookies for authentication) as when OAuth tokens are used for authentication, XSRF is moot as cookies are not used.

0.6.2
-----
- Resolved [issue #6](https://github.com/andrewconnell/breeze.js.labs/issues/6) where entity types had an extra "s" being added incorrectly. The following fix resolves the issue but introduces breaking changes to existing solutions. Once you apply this version, the name of the entity when you populate the metadata store should match the name of the list in SharePoint.

  For instance, if you have a list **Customers**, you should set the entity's **name** property to **Customers**. If the entity name & SharePoint list do not match, Breeze will not recognize the inbound data from an HTTP GET as being the type you manually created when populating the Breeze metadata store.

0.6.0
-----
- Updated to support new capabilities of underlying dependencies. See commit [acddf61f](https://github.com/andrewconnell/breeze.js.labs/commit/acddf61f4fd7b71f100f848bb358a273890ae94e) in reference to [this Stack Overflow discussion](http://stackoverflow.com/questions/24702308/breeze-dataservice-abstractrest-with-sparse-save-response/24769885?noredirect=1#comment40082212_24769885).

0.2.3
-----
- Initial significant release
