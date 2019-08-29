function convTreedatatoTreeValues(typeName, gmiObj) {
    let TreeDataObjArray;
    let TreeValuesObjArray;
    let domainObj = gmiObj.gmi.scope.domain[0];
    let uidParameter = gmiObj.gmi.scope.uidParameter;
    let dispNameParameter = gmiObj.gmi.scope.displayNameParameter;
    let modelName = gmiObj.gmi.scope.modelName;
    
    TreeDataObjArray = domainObj[typeName];
    if (_.isNil(TreeDataObjArray)) {
        TreeValuesObjArray = _.map(TreeDataObjArray, (data) => {
                  let tempValueObj = {}
                  let attrObjArray = data.attribute;
                  let uid,displayName,nodeType,hasChild;
                  let attrObj;
                  
                  attrObj = _.find(attrObjArray,['id',uidParameter]);
                  uid = attrObj.value;
                  attrObj = _.find(attrObjArray, ['id',dispNameParameter]);
                  displayName = attrObj.value;
                  attrObj = _.find(attrObjArray,['id','nodetype']);
                  nodeType = attrObj.value;
                  attrObj = _.find(attrObjArray,['id','haschild']);
                  hasChild = attrObj.value;
                  tempValueObj.name = displayName;
                  tempValueObj.dn = uid;
                  tempValueObj.type = nodeType;
                  tempValueObj.hasChild = hasChild;
                  return tempValueObj;
        });
    }

    return TreeValuesObjArray
 }

 var gmi = {
     "gmi": {
         "scope": {
             "modelName": "configtree",
             "uidParameter": "dn",
             "displayNameParameter": "cn",
             "domain": [{
                 "boardlist": [{
                     "id": "cn=directory manager",
                     "attribute": [{
                             "id": "cn",
                             "value": "NMC"
                         },
                         {
                             "id": "nodetype",
                             "value": "COMPANY"
                         },
                         {
                             "id": "dn",
                             "value": "cn=directory manager"
                         },
                         {
                             "id": "haschild",
                             "value": true
                         }
                     ]
                 }]
             }]
         }
     }
 }
 undefined
 convTreedatatoTreeValues("boardlist", gmi)
