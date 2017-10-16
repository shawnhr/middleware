// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }

// EXAMPLE:

var familyTree = {
  'firstName': 'Beth',
  'lastName': 'Johnson',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Beth Jr.',
      'lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          'location': 'Beijing',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};


//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body
  //in: 2 (obj, func)
  //out: array
  var arr = [];

  var member = function(fm,t){
  if(t(fm)){arr.push(fm.firstName + ' ' + fm.lastName);}
  if(fm.children){
    fm.children.forEach(function(child){
       member(child, t);
    });
  }
};  member(familyTree,truthTest);

  return arr;
};


var livesInBerkeley = function (familyMember) {
  return familyMember.location === 'Berkeley';
}

console.log(filterFamilyMembers(familyTree, livesInBerkeley));