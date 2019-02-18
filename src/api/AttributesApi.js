/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateAttribute', 'model/ErrorModel', 'model/GetAttributes', 'model/UpdateAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateAttribute'), require('../model/ErrorModel'), require('../model/GetAttributes'), require('../model/UpdateAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.AttributesApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.CreateAttribute, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetAttributes, root.SibApiV3Sdk.UpdateAttribute);
  }
}(this, function(ApiClient, CreateAttribute, ErrorModel, GetAttributes, UpdateAttribute) {
  'use strict';

  /**
   * Attributes service.
   * @module api/AttributesApi
   * @version 7.x.x
   */

  /**
   * Constructs a new AttributesApi. 
   * @alias module:api/AttributesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Creates contact attribute
     * @param {module:model/String} attributeCategory Category of the attribute
     * @param {String} attributeName Name of the attribute
     * @param {module:model/CreateAttribute} createAttribute Values to create an attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.createAttributeWithHttpInfo = function(attributeCategory, attributeName, createAttribute) {
      var postBody = createAttribute;

      // verify the required parameter 'attributeCategory' is set
      if (attributeCategory === undefined || attributeCategory === null) {
        throw new Error("Missing the required parameter 'attributeCategory' when calling createAttribute");
      }

      // verify the required parameter 'attributeName' is set
      if (attributeName === undefined || attributeName === null) {
        throw new Error("Missing the required parameter 'attributeName' when calling createAttribute");
      }

      // verify the required parameter 'createAttribute' is set
      if (createAttribute === undefined || createAttribute === null) {
        throw new Error("Missing the required parameter 'createAttribute' when calling createAttribute");
      }


      var pathParams = {
        'attributeCategory': attributeCategory,
        'attributeName': attributeName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contacts/attributes/{attributeCategory}/{attributeName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates contact attribute
     * @param {module:model/String} attributeCategory Category of the attribute
     * @param {String} attributeName Name of the attribute
     * @param {module:model/CreateAttribute} createAttribute Values to create an attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.createAttribute = function(attributeCategory, attributeName, createAttribute) {
      return this.createAttributeWithHttpInfo(attributeCategory, attributeName, createAttribute)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes an attribute
     * @param {module:model/String} attributeCategory Category of the attribute
     * @param {String} attributeName Name of the existing attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteAttributeWithHttpInfo = function(attributeCategory, attributeName) {
      var postBody = null;

      // verify the required parameter 'attributeCategory' is set
      if (attributeCategory === undefined || attributeCategory === null) {
        throw new Error("Missing the required parameter 'attributeCategory' when calling deleteAttribute");
      }

      // verify the required parameter 'attributeName' is set
      if (attributeName === undefined || attributeName === null) {
        throw new Error("Missing the required parameter 'attributeName' when calling deleteAttribute");
      }


      var pathParams = {
        'attributeCategory': attributeCategory,
        'attributeName': attributeName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contacts/attributes/{attributeCategory}/{attributeName}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes an attribute
     * @param {module:model/String} attributeCategory Category of the attribute
     * @param {String} attributeName Name of the existing attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteAttribute = function(attributeCategory, attributeName) {
      return this.deleteAttributeWithHttpInfo(attributeCategory, attributeName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists all attributes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAttributes} and HTTP response
     */
    this.getAttributesWithHttpInfo = function() {
      var postBody = null;


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

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetAttributes;

      return this.apiClient.callApi(
        '/contacts/attributes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lists all attributes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAttributes}
     */
    this.getAttributes = function() {
      return this.getAttributesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates contact attribute
     * @param {module:model/String} attributeCategory Category of the attribute
     * @param {String} attributeName Name of the existing attribute
     * @param {module:model/UpdateAttribute} updateAttribute Values to update an attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateAttributeWithHttpInfo = function(attributeCategory, attributeName, updateAttribute) {
      var postBody = updateAttribute;

      // verify the required parameter 'attributeCategory' is set
      if (attributeCategory === undefined || attributeCategory === null) {
        throw new Error("Missing the required parameter 'attributeCategory' when calling updateAttribute");
      }

      // verify the required parameter 'attributeName' is set
      if (attributeName === undefined || attributeName === null) {
        throw new Error("Missing the required parameter 'attributeName' when calling updateAttribute");
      }

      // verify the required parameter 'updateAttribute' is set
      if (updateAttribute === undefined || updateAttribute === null) {
        throw new Error("Missing the required parameter 'updateAttribute' when calling updateAttribute");
      }


      var pathParams = {
        'attributeCategory': attributeCategory,
        'attributeName': attributeName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contacts/attributes/{attributeCategory}/{attributeName}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates contact attribute
     * @param {module:model/String} attributeCategory Category of the attribute
     * @param {String} attributeName Name of the existing attribute
     * @param {module:model/UpdateAttribute} updateAttribute Values to update an attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateAttribute = function(attributeCategory, attributeName, updateAttribute) {
      return this.updateAttributeWithHttpInfo(attributeCategory, attributeName, updateAttribute)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
