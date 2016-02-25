'use strict';

angular.module('ofe.controllers', ['ngRoute'])

    .controller('View1Ctrl', [function() {
        console.log('view1');
    }])
    .controller('View2Ctrl', [function() {
        console.log('view2');
    }])

    .controller('EventController', function($scope, $http) {


        $http.get("http://api.songkick.com/api/3.0/events.json?location=clientip&apikey=gTRG9nToCgnGvo6K&jsoncallback")
            .success(function(response) {
                $scope.events = response.resultsPage.results.event;


                console.log('$scope.events ', $scope.events);

            });

        $scope.getArtistInfo = function(artist){

            $scope.artist = true;
            $http.get("http://api.songkick.com/api/3.0/search/artists.json?query="+artist+"&apikey=gTRG9nToCgnGvo6K&jsoncallback")
                .success(function(response) {
                    $scope.artist = response.resultsPage.results.artist[0];

                    console.log('$scope.artist ', $scope.artist);
                    if($scope.artist.identifier.length > 0){
                        console.log('mbidID', $scope.artist.identifier[0].mbid);
                        var mbidID = $scope.artist.identifier[0].mbid;
                        $http.get("http://api.songkick.com/api/3.0/artists/mbid:"+mbidID+"/calendar.json?san francisco&apikey=gTRG9nToCgnGvo6K&jsoncallback")
                            .success(function(calResponse) {
                                $scope.artistCalendar = calResponse.resultsPage.results.event;
                                console.log('$scope.artistCalendar', $scope.artistCalendar);
                            })
                    }

                });

        }


    });