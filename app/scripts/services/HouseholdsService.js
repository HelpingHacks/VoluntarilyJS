/**
 * Created with JetBrains WebStorm.
 * User: bwhite
 * Date: 4/8/13
 * Time: 10:00 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

voluntarilyApp.factory('householdsService', function() {
  var households = [
    {id: 1, apt: '1B', address: "123 Green Street", contactName: 'John'},
    {id: 2, apt: '2C', address: "456 Green Street", contactName: 'Theodore Geisel'},
    {id: 3, apt: '3D', address: "789 Green Street", contactName: 'Mr. Weiss'},
    {id: 4, apt: '4C', address: "111 Green Street", contactName: 'Cindy Lou Whoo'},
    {id: 5, apt: '1E', address: "222 Green Street", contactName: 'The Grinch'},
    {id: 6, apt: '1C', address: "333 Red Street", contactName: 'Horton'},
    {id: 7, apt: '1C', address: "444 Red Street", contactName: 'Ms. Thneed'},
    {id: 8, apt: '3D', address: "555 Red Street", contactName: 'The Lorax'},
    {id: 9, apt: '1F', address: "123 Blue Street", contactName: 'Mr. Sneech'},
    {id: 10, apt: '1G', address: "678 Blue Street", contactName: 'Sam'}
  ];

  return {
    getHouseholds: function() {
      return households
    },

    getHousehold: function(id) {
      console.log(households.filter(function(e) {
        return e.id === parseInt(id, 10);
      })[0]);
      return households.filter(function(household) {
        return household.id === parseInt(id, 10);
      })[0]
    }
  }
});
