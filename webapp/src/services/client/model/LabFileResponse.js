/*
 * ML Lab Service
 * Functionality to create and manage Lab projects, services, datasets, models, and experiments.
 *
 * OpenAPI spec version: 2.2.0-SNAPSHOT
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LabFile', 'model/UnifiedErrorMessage', 'model/UnifiedFormatMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LabFile'), require('./UnifiedErrorMessage'), require('./UnifiedFormatMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.MlLabService) {
      root.MlLabService = {};
    }
    root.MlLabService.LabFileResponse = factory(root.MlLabService.ApiClient, root.MlLabService.LabFile, root.MlLabService.UnifiedErrorMessage, root.MlLabService.UnifiedFormatMetadata);
  }
}(this, function(ApiClient, LabFile, UnifiedErrorMessage, UnifiedFormatMetadata) {
  'use strict';

  /**
   * The LabFileResponse model module.
   * @module model/LabFileResponse
   * @version 2.2.0-SNAPSHOT
   */

  /**
   * Constructs a new <code>LabFileResponse</code>.
   * @alias module:model/LabFileResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LabFileResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LabFileResponse} obj Optional instance to populate.
   * @return {module:model/LabFileResponse} The populated <code>LabFileResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('metadata'))
        obj.metadata = UnifiedFormatMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('data'))
        obj.data = LabFile.constructFromObject(data['data']);
      if (data.hasOwnProperty('errors'))
        obj.errors = UnifiedErrorMessage.constructFromObject(data['errors']);
    }
    return obj;
  }

  /**
   * @member {module:model/UnifiedFormatMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {module:model/LabFile} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {module:model/UnifiedErrorMessage} errors
   */
  exports.prototype.errors = undefined;

  return exports;

}));
