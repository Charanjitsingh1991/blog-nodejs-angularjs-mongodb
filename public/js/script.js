const angularApp=angular.module('Rajpreet',['ngRoute','homeController','editController','ownController','singleController','signupController','loginController','articleController','postServices']);

angularApp.config(['$routeProvider',(a)=>{

a.when('/',{
    templateUrl:'./partials/home.html',
    controller:'homeController as hc',
    title:'Angular & Nodejs Blog'
}).
when('/about',{
    template:'<a href="#"><-</a><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget gravida cum sociis natoque penatibus et. Magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed vulputate. Vel facilisis volutpat est velit egestas dui id ornare arcu. Justo nec ultrices dui sapien eget mi proin sed. A cras semper auctor neque vitae tempus quam pellentesque nec. Sapien et ligula ullamcorper malesuada. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Faucibus turpis in eu mi bibendum neque. Sed viverra ipsum nunc aliquet bibendum. Fusce ut placerat orci nulla pellentesque dignissim. Pellentesque dignissim enim sit amet. Duis at consectetur lorem donec massa sapien faucibus. Vitae ultricies leo integer malesuada nunc vel risus commodo. Venenatis urna cursus eget nunc.</p>',
    title:'Portfolio of Creative Developer'
}).
when('/admin',{
    templateUrl:'./partials/login.html',
    controller:'loginController as lc',
    title:'Blog Login'
}).
when('/signup',{
    templateUrl:'./partials/signup.html',
    controller:'signupController as sc',
     title:'Blog Registration'
}).
when('/new',{
    templateUrl:'./partials/newArticle.html',
    controller:'articleController as ac',
    title:'Publish New Article'

}).
when('/articles',{
    templateUrl:'./partials/articles.html',
    controller:'ownController as oc',
    title:'Blog Articles'
}).
when('/:id/:title',{
    templateUrl:'./partials/singlePost.html',
    controller:'singleController as sc',
     title:'Blog single page'
}).
when('/article/edit/:id',{
    templateUrl:'./partials/editArticle.html',
    controller:'editController as ec',
     title:'Blog Edit page'
});

}]);

angularApp.controller('mainController',function($rootScope){
   var self=this;
    if(localStorage.getItem('isLogin')==1){
         $rootScope.login=true;
         $rootScope.data=JSON.parse(localStorage.getItem('userData'));
    }else{
        $rootScope.login=false;
    }

    this.logout=function(){
            localStorage.clear();
            location.reload();
    };
        
});

angularApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);