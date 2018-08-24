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
    define(['ApiClient', 'model/CreateAttributeEnumeration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateAttributeEnumeration'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.CreateAttribute = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.CreateAttributeEnumeration);
  }
}(this, function(ApiClient, CreateAttributeEnumeration) {
  'use strict';




  /**
   * The CreateAttribute model module.
   * @module model/CreateAttribute
   * @version 7.x.x
   */

  /**
   * Constructs a new <code>CreateAttribute</code>.
   * @alias module:model/CreateAttribute
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CreateAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAttribute} obj Optional instance to populate.
   * @return {module:model/CreateAttribute} The populated <code>CreateAttribute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('enumeration')) {
        obj['enumeration'] = ApiClient.convertToType(data['enumeration'], [CreateAttributeEnumeration]);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Value of the attribute. Use only if the attribute's category is 'calculated' or 'global'
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * List of values and labels that the attribute can take. Use only if the attribute's category is \"category\". For example, [{'value':1, 'label':'male'}, {'value':2, 'label':'female'}]
   * @member {Array.<module:model/CreateAttributeEnumeration>} enumeration
   */
  exports.prototype['enumeration'] = undefined;
  /**
   * Type of the attribute. Use only if the attribute's category is 'normal', 'category' or 'transactional' ( type 'boolean' is only available if the category is 'normal' attribute, type 'id' is only available if the category is 'transactional' attribute & type 'category' is only available if the category is 'category' attribute )
   * @member {module:model/CreateAttribute.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "text"
     * @const
     */
    "text": "text",
    /**
     * value: "date"
     * @const
     */
    "date": "date",
    /**
     * value: "float"
     * @const
     */
    "float": "float",
    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",
    /**
     * value: "id"
     * @const
     */
    "id": "id",
    /**
     * value: "category"
     * @const
     */
    "category": "category"  };


  return exports;
}));


