/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddChildDomain', 'model/AddCredits', 'model/CreateChild', 'model/CreateReseller', 'model/ErrorModel', 'model/GetChildAccountCreationStatus', 'model/GetChildDomains', 'model/GetChildInfo', 'model/GetChildrenList', 'model/GetSsoToken', 'model/ManageIp', 'model/RemainingCreditModel', 'model/RemoveCredits', 'model/UpdateChild', 'model/UpdateChildAccountStatus', 'model/UpdateChildDomain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddChildDomain'), require('../model/AddCredits'), require('../model/CreateChild'), require('../model/CreateReseller'), require('../model/ErrorModel'), require('../model/GetChildAccountCreationStatus'), require('../model/GetChildDomains'), require('../model/GetChildInfo'), require('../model/GetChildrenList'), require('../model/GetSsoToken'), require('../model/ManageIp'), require('../model/RemainingCreditModel'), require('../model/RemoveCredits'), require('../model/UpdateChild'), require('../model/UpdateChildAccountStatus'), require('../model/UpdateChildDomain'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.ResellerApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.AddChildDomain, root.SibApiV3Sdk.AddCredits, root.SibApiV3Sdk.CreateChild, root.SibApiV3Sdk.CreateReseller, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetChildAccountCreationStatus, root.SibApiV3Sdk.GetChildDomains, root.SibApiV3Sdk.GetChildInfo, root.SibApiV3Sdk.GetChildrenList, root.SibApiV3Sdk.GetSsoToken, root.SibApiV3Sdk.ManageIp, root.SibApiV3Sdk.RemainingCreditModel, root.SibApiV3Sdk.RemoveCredits, root.SibApiV3Sdk.UpdateChild, root.SibApiV3Sdk.UpdateChildAccountStatus, root.SibApiV3Sdk.UpdateChildDomain);
  }
}(this, function(ApiClient, AddChildDomain, AddCredits, CreateChild, CreateReseller, ErrorModel, GetChildAccountCreationStatus, GetChildDomains, GetChildInfo, GetChildrenList, GetSsoToken, ManageIp, RemainingCreditModel, RemoveCredits, UpdateChild, UpdateChildAccountStatus, UpdateChildDomain) {
  'use strict';

  /**
   * Reseller service.
   * @module api/ResellerApi
   * @version 7.2.0
   */

  /**
   * Constructs a new ResellerApi. 
   * @alias module:api/ResellerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add Email and/or SMS credits to a specific child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/AddCredits} addCredits Values to post to add credit to a specific child account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemainingCreditModel} and HTTP response
     */
    this.addCreditsWithHttpInfo = function(childAuthKey, addCredits) {
      var postBody = addCredits;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling addCredits");
      }

      // verify the required parameter 'addCredits' is set
      if (addCredits === undefined || addCredits === null) {
        throw new Error("Missing the required parameter 'addCredits' when calling addCredits");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RemainingCreditModel;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/credits/add', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add Email and/or SMS credits to a specific child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/AddCredits} addCredits Values to post to add credit to a specific child account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemainingCreditModel}
     */
    this.addCredits = function(childAuthKey, addCredits) {
      return this.addCreditsWithHttpInfo(childAuthKey, addCredits)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Associate a dedicated IP to the child
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/ManageIp} ip IP to associate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.associateIpToChildWithHttpInfo = function(childAuthKey, ip) {
      var postBody = ip;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling associateIpToChild");
      }

      // verify the required parameter 'ip' is set
      if (ip === undefined || ip === null) {
        throw new Error("Missing the required parameter 'ip' when calling associateIpToChild");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/ips/associate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Associate a dedicated IP to the child
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/ManageIp} ip IP to associate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.associateIpToChild = function(childAuthKey, ip) {
      return this.associateIpToChildWithHttpInfo(childAuthKey, ip)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a domain for a child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/AddChildDomain} addChildDomain Sender domain to add for a specific child account. This will not be displayed to the parent account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.createChildDomainWithHttpInfo = function(childAuthKey, addChildDomain) {
      var postBody = addChildDomain;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling createChildDomain");
      }

      // verify the required parameter 'addChildDomain' is set
      if (addChildDomain === undefined || addChildDomain === null) {
        throw new Error("Missing the required parameter 'addChildDomain' when calling createChildDomain");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/domains', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a domain for a child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/AddChildDomain} addChildDomain Sender domain to add for a specific child account. This will not be displayed to the parent account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.createChildDomain = function(childAuthKey, addChildDomain) {
      return this.createChildDomainWithHttpInfo(childAuthKey, addChildDomain)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a reseller child
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateChild} opts.resellerChild reseller child to add
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateReseller} and HTTP response
     */
    this.createResellerChildWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['resellerChild'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateReseller;

      return this.apiClient.callApi(
        '/reseller/children', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a reseller child
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateChild} opts.resellerChild reseller child to add
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateReseller}
     */
    this.createResellerChild = function(opts) {
      return this.createResellerChildWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes the sender domain of the reseller child based on the childAuthKey and domainName passed
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {String} domainName Pass the existing domain that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteChildDomainWithHttpInfo = function(childAuthKey, domainName) {
      var postBody = null;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling deleteChildDomain");
      }

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw new Error("Missing the required parameter 'domainName' when calling deleteChildDomain");
      }


      var pathParams = {
        'childAuthKey': childAuthKey,
        'domainName': domainName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/domains/{domainName}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes the sender domain of the reseller child based on the childAuthKey and domainName passed
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {String} domainName Pass the existing domain that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteChildDomain = function(childAuthKey, domainName) {
      return this.deleteChildDomainWithHttpInfo(childAuthKey, domainName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a single reseller child based on the childAuthKey supplied
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteResellerChildWithHttpInfo = function(childAuthKey) {
      var postBody = null;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling deleteResellerChild");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes a single reseller child based on the childAuthKey supplied
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteResellerChild = function(childAuthKey) {
      return this.deleteResellerChildWithHttpInfo(childAuthKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Dissociate a dedicated IP to the child
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/ManageIp} ip IP to dissociate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.dissociateIpFromChildWithHttpInfo = function(childAuthKey, ip) {
      var postBody = ip;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling dissociateIpFromChild");
      }

      // verify the required parameter 'ip' is set
      if (ip === undefined || ip === null) {
        throw new Error("Missing the required parameter 'ip' when calling dissociateIpFromChild");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/ips/dissociate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Dissociate a dedicated IP to the child
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/ManageIp} ip IP to dissociate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.dissociateIpFromChild = function(childAuthKey, ip) {
      return this.dissociateIpFromChildWithHttpInfo(childAuthKey, ip)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the status of reseller&#39;s child account creation, whether it is successfully created (exists) or not based on the childAuthKey supplied
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetChildAccountCreationStatus} and HTTP response
     */
    this.getChildAccountCreationStatusWithHttpInfo = function(childAuthKey) {
      var postBody = null;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling getChildAccountCreationStatus");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetChildAccountCreationStatus;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/accountCreationStatus', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the status of reseller&#39;s child account creation, whether it is successfully created (exists) or not based on the childAuthKey supplied
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetChildAccountCreationStatus}
     */
    this.getChildAccountCreationStatus = function(childAuthKey) {
      return this.getChildAccountCreationStatusWithHttpInfo(childAuthKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets all the sender domains of a specific child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetChildDomains} and HTTP response
     */
    this.getChildDomainsWithHttpInfo = function(childAuthKey) {
      var postBody = null;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling getChildDomains");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetChildDomains;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/domains', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets all the sender domains of a specific child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetChildDomains}
     */
    this.getChildDomains = function(childAuthKey) {
      return this.getChildDomainsWithHttpInfo(childAuthKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets the info about a specific child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetChildInfo} and HTTP response
     */
    this.getChildInfoWithHttpInfo = function(childAuthKey) {
      var postBody = null;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling getChildInfo");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetChildInfo;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets the info about a specific child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetChildInfo}
     */
    this.getChildInfo = function(childAuthKey) {
      return this.getChildInfoWithHttpInfo(childAuthKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets the list of all reseller&#39;s children accounts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents for child accounts information per page (default to 10)
     * @param {Number} opts.offset Index of the first document in the page (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetChildrenList} and HTTP response
     */
    this.getResellerChildsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetChildrenList;

      return this.apiClient.callApi(
        '/reseller/children', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets the list of all reseller&#39;s children accounts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents for child accounts information per page (default to 10)
     * @param {Number} opts.offset Index of the first document in the page (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetChildrenList}
     */
    this.getResellerChilds = function(opts) {
      return this.getResellerChildsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get session token to access Sendinblue (SSO)
     * It returns a session [token] which will remain valid for a short period of time. A child account will be able to access a white-labeled section by using the following url pattern &#x3D;&gt; https:/email.mydomain.com/login/sso?token&#x3D;[token]
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSsoToken} and HTTP response
     */
    this.getSsoTokenWithHttpInfo = function(childAuthKey) {
      var postBody = null;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling getSsoToken");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetSsoToken;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/auth', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get session token to access Sendinblue (SSO)
     * It returns a session [token] which will remain valid for a short period of time. A child account will be able to access a white-labeled section by using the following url pattern &#x3D;&gt; https:/email.mydomain.com/login/sso?token&#x3D;[token]
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSsoToken}
     */
    this.getSsoToken = function(childAuthKey) {
      return this.getSsoTokenWithHttpInfo(childAuthKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove Email and/or SMS credits from a specific child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/RemoveCredits} removeCredits Values to post to remove email or SMS credits from a specific child account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemainingCreditModel} and HTTP response
     */
    this.removeCreditsWithHttpInfo = function(childAuthKey, removeCredits) {
      var postBody = removeCredits;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling removeCredits");
      }

      // verify the required parameter 'removeCredits' is set
      if (removeCredits === undefined || removeCredits === null) {
        throw new Error("Missing the required parameter 'removeCredits' when calling removeCredits");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RemainingCreditModel;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/credits/remove', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove Email and/or SMS credits from a specific child account
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/RemoveCredits} removeCredits Values to post to remove email or SMS credits from a specific child account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemainingCreditModel}
     */
    this.removeCredits = function(childAuthKey, removeCredits) {
      return this.removeCreditsWithHttpInfo(childAuthKey, removeCredits)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates infos of reseller&#39;s child account status based on the childAuthKey supplied
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/UpdateChildAccountStatus} updateChildAccountStatus values to update in child account status
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateChildAccountStatusWithHttpInfo = function(childAuthKey, updateChildAccountStatus) {
      var postBody = updateChildAccountStatus;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling updateChildAccountStatus");
      }

      // verify the required parameter 'updateChildAccountStatus' is set
      if (updateChildAccountStatus === undefined || updateChildAccountStatus === null) {
        throw new Error("Missing the required parameter 'updateChildAccountStatus' when calling updateChildAccountStatus");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/accountStatus', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates infos of reseller&#39;s child account status based on the childAuthKey supplied
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/UpdateChildAccountStatus} updateChildAccountStatus values to update in child account status
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateChildAccountStatus = function(childAuthKey, updateChildAccountStatus) {
      return this.updateChildAccountStatusWithHttpInfo(childAuthKey, updateChildAccountStatus)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the sender domain of reseller&#39;s child based on the childAuthKey and domainName passed
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {String} domainName Pass the existing domain that needs to be updated
     * @param {module:model/UpdateChildDomain} updateChildDomain value to update for sender domain
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateChildDomainWithHttpInfo = function(childAuthKey, domainName, updateChildDomain) {
      var postBody = updateChildDomain;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling updateChildDomain");
      }

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw new Error("Missing the required parameter 'domainName' when calling updateChildDomain");
      }

      // verify the required parameter 'updateChildDomain' is set
      if (updateChildDomain === undefined || updateChildDomain === null) {
        throw new Error("Missing the required parameter 'updateChildDomain' when calling updateChildDomain");
      }


      var pathParams = {
        'childAuthKey': childAuthKey,
        'domainName': domainName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}/domains/{domainName}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the sender domain of reseller&#39;s child based on the childAuthKey and domainName passed
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {String} domainName Pass the existing domain that needs to be updated
     * @param {module:model/UpdateChildDomain} updateChildDomain value to update for sender domain
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateChildDomain = function(childAuthKey, domainName, updateChildDomain) {
      return this.updateChildDomainWithHttpInfo(childAuthKey, domainName, updateChildDomain)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates infos of reseller&#39;s child based on the childAuthKey supplied
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/UpdateChild} resellerChild values to update in child profile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateResellerChildWithHttpInfo = function(childAuthKey, resellerChild) {
      var postBody = resellerChild;

      // verify the required parameter 'childAuthKey' is set
      if (childAuthKey === undefined || childAuthKey === null) {
        throw new Error("Missing the required parameter 'childAuthKey' when calling updateResellerChild");
      }

      // verify the required parameter 'resellerChild' is set
      if (resellerChild === undefined || resellerChild === null) {
        throw new Error("Missing the required parameter 'resellerChild' when calling updateResellerChild");
      }


      var pathParams = {
        'childAuthKey': childAuthKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'partnerKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childAuthKey}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates infos of reseller&#39;s child based on the childAuthKey supplied
     * @param {String} childAuthKey auth key of reseller&#39;s child
     * @param {module:model/UpdateChild} resellerChild values to update in child profile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateResellerChild = function(childAuthKey, resellerChild) {
      return this.updateResellerChildWithHttpInfo(childAuthKey, resellerChild)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
