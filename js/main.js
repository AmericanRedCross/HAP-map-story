var windowHeight = $(window).height();
var width = $(window).width(); 
var mapCreated = false;

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 

$(window).resize(function(){     
    windowHeight = $(window).height();
    var newWidth = $(window).width();
    if(newWidth >= 768 && mapCreated === false){
      fullSetup();
    }
});

function callImageModal(item) {
  var imgUrl = $(item).find('img').attr("src").slice(0,-9) + 'large.jpg';
  var img_maxHeight = (windowHeight*0.85).toString() + "px";
  $(".modal-img").css('max-height', img_maxHeight);
  $(".modal-img").attr('src', imgUrl);
  $("#myImageModal").modal();    
}


function fullSetup(){

width = $(window).width(); 
if(width >= 768){
      mapCreated = true;

      
      $(".quickNav").html('<div class="btn-group hidden-xs">'+
          '<button type="button" class="btn btn-xs dropdown-toggle btn-quickNav" data-toggle="dropdown">'+ 
            '<span style="font-size:18px; color:#f5f5f5;"> ☰ </span></button>'+
            '<ul class="dropdown-menu" role="menu">'+
              '<li><a href="#">Home</a></li>'+
              '<li><a href="#martine"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Martine</a></li>'+
              '<li><a href="#soccer"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Soccer</a></li>'+
              '<li><a href="#canaan"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Canaan</a></li>'+
              '<li><a href="#mother"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Mother</a></li>'+
              '<li><a href="#father"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Father</a></li>'+
              '<li><a href="#soil"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; SOIL</a></li>'+
              '<li><a href="#junior"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Junior</a></li>'+
              '<li><a href="#dominique"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Dominique</a></li>'+
              '<li><a href="#newborn"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Newborn</a></li>'+
              '<li><a href="#landy"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Landy</a></li>'+
              // '<li><a href="#families"><span class="glyphicon glyphicon-picture color-blue"></span>&nbsp; Families</a></li>'+
              '<li><a href="#haitianredcross"><span class="glyphicon glyphicon-info-sign color-red"></span>&nbsp; Haitian Red Cross</a></li></ul></div>');
              // '<li><a href="#">Home</a></li>'+
              // '<li><a href="#emergency-01"><span class="glyphicon glyphicon-picture color-green"></span>&nbsp; Emergency phase</a></li>'+
              // '<li><a href="#icrc-recovery-guiuan"><span class="glyphicon glyphicon-picture color-green"></span>&nbsp; Recovery phase</a></li>'+
              // '<li><a href="#sheltergallery1"><span class="glyphicon glyphicon-picture color-green"></span>&nbsp; To build a home</a></li>'+
              // '<li><a href="#palawangallery"><span class="glyphicon glyphicon-picture color-green"></span>&nbsp; Reaching out</a></li>'+
              // '<li><a href="#manila"><span class="glyphicon glyphicon-info-sign color-red"></span>&nbsp; Philippine Red Cross</a></li>'+
              // '<li><a href="#movement"><span class="glyphicon glyphicon-info-sign color-red"></span>&nbsp; International Red Cross and Red Crescent Movement</a></li></ul></div>');
      $(".quickNav").tooltip(); 
 

      $('body').css("padding-top","0px");

      // geojson points for each story piece
      var storyPoints = [
      { "type": "Feature",
        "properties": { "id": "martine", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.3395928, 18.547327 ] } },
      { "type": "Feature",
        "properties": { "id": "soccer", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.311673, 18.534368 ] } },
      { "type": "Feature",
        "properties": { "id": "canaan", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.2684237, 18.6518095 ] } },
      // { "type": "Feature",
      //   "properties": { "id": "mother", "place_name": "isabel leyte", "view_bounds": [
      //     [17.696833, -74.355351], [20.149248, -71.773564] ],  "style": {
      //       weight: 2,
      //       color: "#999",
      //       opacity: 1,
      //       fillColor: "#B0DE5C",
      //       fillOpacity: 0.8
      //   }
      // },
      //   "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.555268948999924, 19.877598168000077 ], [ -72.554660803999923, 19.877418272000057 ], [ -72.55454362699993, 19.876965053000049 ], [ -72.553416951999907, 19.876362626000059 ], [ -72.55244425099994, 19.875057901000048 ], [ -72.552361213999916, 19.874253037000074 ], [ -72.552805589999934, 19.873906941000087 ], [ -72.553512224999906, 19.873889566000059 ], [ -72.555775301999915, 19.871970113000089 ], [ -72.555739657999936, 19.871183956000039 ], [ -72.554587235999918, 19.869768434000036 ], [ -72.553484817999902, 19.869455258000073 ], [ -72.55287203599994, 19.868959206000056 ], [ -72.552473015999908, 19.868213199000081 ], [ -72.550542820999908, 19.867726115000039 ], [ -72.550484749999953, 19.867156427000054 ], [ -72.549581068999942, 19.867577457000039 ], [ -72.547922896999921, 19.865540816000077 ], [ -72.547125446999928, 19.865882039000041 ], [ -72.546125119999942, 19.86513676800007 ], [ -72.546133595999947, 19.864586054000085 ], [ -72.545785451999905, 19.864265168000088 ], [ -72.545473101999903, 19.864712381000061 ], [ -72.544688860999941, 19.864195884000083 ], [ -72.544145570999945, 19.862282923000066 ], [ -72.5437382, 19.862087708000047 ], [ -72.542466428999944, 19.862855828000079 ], [ -72.540357910999944, 19.861562463000041 ], [ -72.541025014999946, 19.86101181500004 ], [ -72.539952319999941, 19.86001262700006 ], [ -72.541356075999943, 19.85996880600004 ], [ -72.541302909999899, 19.859083097000052 ], [ -72.540703958999927, 19.858930374000067 ], [ -72.5406090199999, 19.85765577300009 ], [ -72.539522269999907, 19.858191598000076 ], [ -72.538736048999908, 19.855950246000077 ], [ -72.532107647999908, 19.849465047000081 ], [ -72.529520150999929, 19.847686345000056 ], [ -72.527701359999924, 19.847426297000084 ], [ -72.525729716999933, 19.847787252000046 ], [ -72.524422429999902, 19.84900626700005 ], [ -72.523935635999919, 19.849622557000089 ], [ -72.522422331999906, 19.849971782000068 ], [ -72.521400176999919, 19.848801751000053 ], [ -72.521384166999951, 19.844304382000075 ], [ -72.521210879999899, 19.843787261000045 ], [ -72.519604798999922, 19.840893253000047 ], [ -72.51826835199995, 19.839691662000064 ], [ -72.517688542999906, 19.839539137000088 ], [ -72.514733645999911, 19.839317406000077 ], [ -72.513122141999929, 19.84045978000006 ], [ -72.513183180999931, 19.842664098000057 ], [ -72.512085610999918, 19.845123012000045 ], [ -72.512055323999903, 19.846450030000085 ], [ -72.511688373999903, 19.847953008000047 ], [ -72.510410315999934, 19.848513065000077 ], [ -72.509481027999925, 19.847515811000051 ], [ -72.508209799999918, 19.847028479000073 ], [ -72.507357569999954, 19.846601169000053 ], [ -72.505877918999943, 19.84479249900005 ], [ -72.506151314999897, 19.84256587200008 ], [ -72.50577889099992, 19.841359621000038 ], [ -72.505364079999936, 19.840423717000078 ], [ -72.504750230999946, 19.838789665000036 ], [ -72.50512518499994, 19.838000237000074 ], [ -72.504336427999931, 19.835957371000063 ], [ -72.503818582999941, 19.835507645000064 ], [ -72.503273013999944, 19.835608347000061 ], [ -72.501246887999912, 19.837024861000089 ], [ -72.50016127899994, 19.836269142000049 ], [ -72.498316201999899, 19.835259002000043 ], [ -72.498699643999942, 19.834541935000061 ], [ -72.499327194999921, 19.833467067000072 ], [ -72.498973009999929, 19.832929339000088 ], [ -72.499558720999914, 19.83208871000005 ], [ -72.500495479999927, 19.830160388000081 ], [ -72.500222591999943, 19.82442231400006 ], [ -72.497965347999923, 19.823541830000067 ], [ -72.495780679999939, 19.821687102000055 ], [ -72.493829229999903, 19.819564687000081 ], [ -72.492589628999951, 19.819511159000058 ], [ -72.49180686099993, 19.820746334000091 ], [ -72.490511783999921, 19.82118865800004 ], [ -72.489457252999898, 19.82089385800009 ], [ -72.489104118999933, 19.820292932000086 ], [ -72.489990631999945, 19.819131457000083 ], [ -72.486622207999915, 19.814894030000062 ], [ -72.485920826999916, 19.814595248000046 ], [ -72.484888589999912, 19.814707101000067 ], [ -72.484372432999919, 19.814763024000058 ], [ -72.482701483999904, 19.814838777000091 ], [ -72.480733703999931, 19.81498263900005 ], [ -72.479866861999938, 19.814889148000077 ], [ -72.478964062999921, 19.815264702000036 ], [ -72.475280717999908, 19.815284862000055 ], [ -72.473475065999935, 19.814220797000075 ], [ -72.472082400999909, 19.813596100000041 ], [ -72.471261579999918, 19.813006580000035 ], [ -72.47050691599992, 19.812463043000037 ], [ -72.469648639999946, 19.813037891000079 ], [ -72.468306531999929, 19.812233228000082 ], [ -72.467582069999935, 19.810985823000067 ], [ -72.466848164999931, 19.809729252000068 ], [ -72.465673946999914, 19.809170807000044 ], [ -72.464004000999921, 19.807982191000065 ], [ -72.465746269999897, 19.80520757000005 ], [ -72.46748085899992, 19.804121536000082 ], [ -72.470225568999922, 19.803708943000061 ], [ -72.472490638999943, 19.799234954000042 ], [ -72.475765749999937, 19.797854543000085 ], [ -72.47758822499992, 19.796020113000054 ], [ -72.476975224999933, 19.79133383900006 ], [ -72.480858769999941, 19.791894313000057 ], [ -72.4854766979999, 19.791254983000044 ], [ -72.487060638999935, 19.792451215000085 ], [ -72.48792130399994, 19.79536203300006 ], [ -72.491441970999915, 19.795348311000055 ], [ -72.49936968399993, 19.794149994000065 ], [ -72.512743406999903, 19.797343886000078 ], [ -72.511392750999903, 19.79523905800005 ], [ -72.508831865999923, 19.792431013000055 ], [ -72.508422506999921, 19.790538008000055 ], [ -72.508623320999902, 19.786829323000063 ], [ -72.510748504999924, 19.785748173000059 ], [ -72.510088732999918, 19.784619276000058 ], [ -72.510366444999931, 19.783322784000063 ], [ -72.509669754999948, 19.78149800500006 ], [ -72.508497690999945, 19.780190338000068 ], [ -72.507527845999903, 19.778758996000079 ], [ -72.507180751999897, 19.776541745000088 ], [ -72.507935744999941, 19.774610711000037 ], [ -72.507668778999914, 19.773992968000073 ], [ -72.507604104999928, 19.772628506000046 ], [ -72.508115928999928, 19.771001135000063 ], [ -72.508836802999951, 19.768807793000065 ], [ -72.508944684999904, 19.768005587000061 ], [ -72.507871473999899, 19.767701635000037 ], [ -72.507459364999931, 19.767217296000069 ], [ -72.507112961999951, 19.766797070000052 ], [ -72.505905992999942, 19.767123412000046 ], [ -72.505249891999938, 19.766987864000043 ], [ -72.504451772999914, 19.766173021000043 ], [ -72.503739396999947, 19.765368400000057 ], [ -72.503139682999915, 19.764673691000041 ], [ -72.501777453999921, 19.763950365000085 ], [ -72.503890650999949, 19.763004529000057 ], [ -72.507532301999902, 19.763750678000065 ], [ -72.509937885999932, 19.764244722000058 ], [ -72.510349131999931, 19.763564195000072 ], [ -72.511116091999952, 19.762698930000056 ], [ -72.511394157999916, 19.761375257000054 ], [ -72.512108133999902, 19.760238395000044 ], [ -72.514158386999952, 19.759038755000063 ], [ -72.514054394999903, 19.755289688000062 ], [ -72.512845997999932, 19.751407904000075 ], [ -72.513132132999942, 19.750174711000057 ], [ -72.513707342999908, 19.748755935000077 ], [ -72.514657892999935, 19.747730592000039 ], [ -72.515301818999944, 19.743721048000054 ], [ -72.516376031999926, 19.742101438000077 ], [ -72.516517286999942, 19.74159771300009 ], [ -72.516891045999898, 19.740248352000037 ], [ -72.517452335999906, 19.739109247000044 ], [ -72.518281138999953, 19.738551850000079 ], [ -72.520139889999939, 19.738613715000042 ], [ -72.521099961999937, 19.738202579000074 ], [ -72.521861274999935, 19.738312431000054 ], [ -72.52255207099995, 19.738665164000054 ], [ -72.524034542999914, 19.739010786000051 ], [ -72.525579611999945, 19.739005057000043 ], [ -72.5261695129999, 19.738480344000038 ], [ -72.526595887999918, 19.738043746000073 ], [ -72.527961181999899, 19.737945228000058 ], [ -72.528546268999946, 19.738350650000086 ], [ -72.528950399999928, 19.738735518000055 ], [ -72.529535704999944, 19.738508762000038 ], [ -72.53021401399991, 19.737813800000083 ], [ -72.530897527999912, 19.737398793000068 ], [ -72.531948009999951, 19.737304842000071 ], [ -72.532344714999908, 19.73694013700009 ], [ -72.532289060999915, 19.736216905000049 ], [ -72.532005496999943, 19.73542733000005 ], [ -72.532094393999898, 19.734606775000088 ], [ -72.532373063999898, 19.733852034000051 ], [ -72.532808923999937, 19.733415548000039 ], [ -72.533337518999929, 19.733151971000041 ], [ -72.534415900999932, 19.733103529000061 ], [ -72.534967568999946, 19.733201499000074 ], [ -72.535562915999947, 19.73293874400008 ], [ -72.536238775999948, 19.733020270000054 ], [ -72.536797466999928, 19.733280846000071 ], [ -72.537607668999954, 19.733310045000053 ], [ -72.538910737999913, 19.732912548000058 ], [ -72.539743610999949, 19.733330369000043 ], [ -72.540887973999929, 19.733960121000052 ], [ -72.54322887099994, 19.734299311000086 ], [ -72.545485113999916, 19.733941925000067 ], [ -72.547921458999951, 19.733027108000044 ], [ -72.549382503999936, 19.73290264700006 ], [ -72.550152099999934, 19.733093748000044 ], [ -72.550805505999904, 19.733400720000077 ], [ -72.55161146599994, 19.73433284500004 ], [ -72.552141312999936, 19.735234108000043 ], [ -72.552865359999942, 19.735912216000088 ], [ -72.553516994999939, 19.736336528000038 ], [ -72.554773127999908, 19.736516291000044 ], [ -72.555532410999945, 19.73676140200007 ], [ -72.556263376999937, 19.736355969000044 ], [ -72.556748013999936, 19.735847856000078 ], [ -72.557739147999939, 19.735265390000052 ], [ -72.557610266999916, 19.734333495000044 ], [ -72.55883620599991, 19.73462107000006 ], [ -72.559255123999947, 19.735295085000075 ], [ -72.559680495999942, 19.735544657000048 ], [ -72.560473342999899, 19.735465171000044 ], [ -72.561166475999926, 19.736296407000054 ], [ -72.562001413999951, 19.736578727000051 ], [ -72.562900448999926, 19.737042491000068 ], [ -72.563314398999921, 19.737418392000052 ], [ -72.563794146999953, 19.737858389000053 ], [ -72.56417057099992, 19.738188545000071 ], [ -72.565039357999922, 19.738760324000054 ], [ -72.5654652959999, 19.73897377500009 ], [ -72.566340386999912, 19.739130221000039 ], [ -72.567054575999919, 19.739203128000042 ], [ -72.567749874999947, 19.739266746000055 ], [ -72.568932522999944, 19.739264749000085 ], [ -72.569538046999924, 19.738956872000074 ], [ -72.570235121999929, 19.738903131000086 ], [ -72.570956721999949, 19.739120582000055 ], [ -72.571678243999941, 19.739338122000049 ], [ -72.572142909999911, 19.740148164000061 ], [ -72.572553161999906, 19.741399968000053 ], [ -72.5729242889999, 19.742082248000088 ], [ -72.573914132999903, 19.742854263000083 ], [ -72.572868985999946, 19.743851500000062 ], [ -72.572181764999925, 19.744510492000074 ], [ -72.571982424999931, 19.745708886000045 ], [ -72.571490089999941, 19.746731668000052 ], [ -72.573532051999905, 19.749829774000091 ], [ -72.578589653999927, 19.754097565000052 ], [ -72.578058934999945, 19.75765756900006 ], [ -72.57760088099991, 19.759565833000067 ], [ -72.576615302999926, 19.761033568000073 ], [ -72.575139834999902, 19.764616777000072 ], [ -72.5744821399999, 19.765845072000047 ], [ -72.575636592999899, 19.766456712000036 ], [ -72.581349276999902, 19.76717528100005 ], [ -72.5833077879999, 19.763815229000045 ], [ -72.586178583999924, 19.76321276300007 ], [ -72.588314814999933, 19.763882805000037 ], [ -72.590250806999904, 19.762003358000072 ], [ -72.59336948899994, 19.760771999000042 ], [ -72.596977520999928, 19.75870728700005 ], [ -72.602210114999934, 19.759626389000061 ], [ -72.608384050999916, 19.761397801000044 ], [ -72.618830921999916, 19.764499299000079 ], [ -72.622561210999947, 19.763826506000044 ], [ -72.624330587999907, 19.763515849000044 ], [ -72.630972368999949, 19.765933880000091 ], [ -72.631371018999914, 19.771231361000048 ], [ -72.639598882999906, 19.77221615600007 ], [ -72.637383180999905, 19.77367696500005 ], [ -72.638513047999936, 19.777927436000084 ], [ -72.643173215999923, 19.785394333000056 ], [ -72.656289169999923, 19.785566816000085 ], [ -72.653280758999927, 19.776658901000076 ], [ -72.657899259999908, 19.775933744000042 ], [ -72.6641865199999, 19.775916672000051 ], [ -72.668303263999917, 19.776232255000082 ], [ -72.673601585999904, 19.778622336000069 ], [ -72.676304622999908, 19.784329048000075 ], [ -72.67619147399995, 19.78620602400008 ], [ -72.676557446999936, 19.788604080000084 ], [ -72.677054251999948, 19.791843649000043 ], [ -72.679160246999913, 19.797289755000065 ], [ -72.680362119999927, 19.801261001000057 ], [ -72.681453179999949, 19.803668470000048 ], [ -72.678000241999939, 19.808843602000081 ], [ -72.677212720999933, 19.813791500000036 ], [ -72.680085443999928, 19.819021766000049 ], [ -72.682017731999906, 19.822650271000043 ], [ -72.683807502999912, 19.826240886000051 ], [ -72.684580011999913, 19.831543151000062 ], [ -72.682898940999905, 19.832298019000064 ], [ -72.678854864999948, 19.832787284000062 ], [ -72.677243303999944, 19.832694071000049 ], [ -72.674287216999915, 19.832529142000055 ], [ -72.669960848999949, 19.832084333000068 ], [ -72.665338055999939, 19.830380215000048 ], [ -72.660897576999901, 19.82861517200007 ], [ -72.655776694999929, 19.828349313000047 ], [ -72.651736722999942, 19.827916867000056 ], [ -72.646934982999937, 19.828016122000065 ], [ -72.643985593999901, 19.828699702000051 ], [ -72.641854808999938, 19.828879217000065 ], [ -72.638938433999954, 19.829265097000075 ], [ -72.637937432999934, 19.826614824000046 ], [ -72.639363458999924, 19.82375279900009 ], [ -72.640145526999902, 19.821198351000078 ], [ -72.639107638999917, 19.818457307000074 ], [ -72.636418938999952, 19.817012918000046 ], [ -72.633806428999947, 19.817511104000062 ], [ -72.631784336999942, 19.816806929000052 ], [ -72.629923730999906, 19.813576300000079 ], [ -72.630048333999923, 19.811609179000072 ], [ -72.629459506999922, 19.812061931000073 ], [ -72.628967442999908, 19.812425675000043 ], [ -72.628532111999903, 19.812826288000053 ], [ -72.628013493999902, 19.813054242000078 ], [ -72.627186606999942, 19.813476735000052 ], [ -72.626233103999937, 19.813427942000089 ], [ -72.62513757399995, 19.813304932000051 ], [ -72.624350363999952, 19.813619591000077 ], [ -72.623283201999925, 19.813515095000071 ], [ -72.622684373999903, 19.814003806000073 ], [ -72.622925965999912, 19.815081743000064 ], [ -72.622376685999939, 19.815444614000057 ], [ -72.621610458999953, 19.815633133000063 ], [ -72.620921773999953, 19.815100184000073 ], [ -72.62027775599995, 19.814775496000038 ], [ -72.619333096999924, 19.814771928000084 ], [ -72.618727074999924, 19.815098006000085 ], [ -72.618782032999945, 19.81589346700008 ], [ -72.618401520999953, 19.816457305000085 ], [ -72.617749756999899, 19.81664724400008 ], [ -72.616764318999913, 19.816823787000089 ], [ -72.616195901999902, 19.81718647200006 ], [ -72.615560959999925, 19.817530119000082 ], [ -72.614992403999906, 19.817901828000061 ], [ -72.616187736999905, 19.820292950000066 ], [ -72.61638565599992, 19.824296225000069 ], [ -72.615864948999899, 19.827856507000035 ], [ -72.615003800999943, 19.83120438800006 ], [ -72.613530272999924, 19.834020391000081 ], [ -72.610674905999929, 19.836059259000081 ], [ -72.607068539999943, 19.837898301000052 ], [ -72.604087788999948, 19.838743285000078 ], [ -72.601538768999944, 19.838167196000086 ], [ -72.598087090999911, 19.837326019000045 ], [ -72.596628280999937, 19.834696491000045 ], [ -72.595176526999921, 19.831606492000049 ], [ -72.594386455999938, 19.830205130000081 ], [ -72.590875800999925, 19.831394966000062 ], [ -72.591477703999942, 19.831981029000076 ], [ -72.591900786999929, 19.832402157000047 ], [ -72.592653841999947, 19.832457466000051 ], [ -72.593187601999944, 19.832500784000047 ], [ -72.593580494999912, 19.83366204400005 ], [ -72.593836124999939, 19.834433123000053 ], [ -72.594503624999902, 19.835733519000087 ], [ -72.595292085999915, 19.837243206000039 ], [ -72.595500871999946, 19.839855890000081 ], [ -72.595126064999931, 19.840663610000036 ], [ -72.594897970999909, 19.841229529000088 ], [ -72.59462513099993, 19.841605058000084 ], [ -72.594255347999933, 19.842078776000051 ], [ -72.593227008999918, 19.842552543000068 ], [ -72.592526874999919, 19.84341003600008 ], [ -72.592624825999906, 19.844513051000035 ], [ -72.592600926999921, 19.845461023000041 ], [ -72.591730839999911, 19.846830947000058 ], [ -72.591088312999943, 19.847671150000053 ], [ -72.590525296999942, 19.848295646000054 ], [ -72.590190648999908, 19.848968462000073 ], [ -72.590169265999918, 19.849753857000053 ], [ -72.589790531999938, 19.850182207000046 ], [ -72.589337568999952, 19.85110622500008 ], [ -72.588628019999931, 19.851322345000085 ], [ -72.588000391999913, 19.851169392000088 ], [ -72.586710352999944, 19.851269302000048 ], [ -72.585790121999935, 19.851536821000082 ], [ -72.584767029999909, 19.851658390000068 ], [ -72.583830739999939, 19.851717928000085 ], [ -72.583248828999899, 19.851701009000067 ], [ -72.582662513999935, 19.851340936000042 ], [ -72.582354039999927, 19.850912311000059 ], [ -72.581892094999944, 19.850535775000083 ], [ -72.58134354099991, 19.85020320700005 ], [ -72.58004331199993, 19.849725002000071 ], [ -72.580032904999939, 19.850411226000062 ], [ -72.580059429999949, 19.851179117000072 ], [ -72.580149592999931, 19.851523523000083 ], [ -72.580614763999904, 19.851692446000072 ], [ -72.581006481999907, 19.852293750000058 ], [ -72.581277612999941, 19.852667699000051 ], [ -72.581490501999951, 19.853104056000063 ], [ -72.581285019999939, 19.853435421000086 ], [ -72.58114704399992, 19.85435466000007 ], [ -72.581483811999931, 19.854801728000041 ], [ -72.580870034999919, 19.855624221000085 ], [ -72.581637538999928, 19.856627980000042 ], [ -72.581512288999932, 19.85733070100008 ], [ -72.582211332999918, 19.857809773000042 ], [ -72.582609306999927, 19.858004776000087 ], [ -72.583038308999903, 19.858037683000077 ], [ -72.582940201999918, 19.858840089000068 ], [ -72.583095208999907, 19.859320805000038 ], [ -72.582857381999929, 19.859895599000083 ], [ -72.582914611999911, 19.860528477000059 ], [ -72.583279569999945, 19.861012042000084 ], [ -72.583339948999935, 19.86143730200007 ], [ -72.583247859999915, 19.861842434000039 ], [ -72.582995636999954, 19.862109965000059 ], [ -72.582566036999935, 19.86337745700007 ], [ -72.582815601999926, 19.86391363000007 ], [ -72.582674040999905, 19.864435465000042 ], [ -72.583117605999917, 19.865398800000037 ], [ -72.583298311999897, 19.866069469000081 ], [ -72.583007367999926, 19.866372587000058 ], [ -72.582468437999921, 19.866663221000067 ], [ -72.580965585999934, 19.867573045000086 ], [ -72.579959591999909, 19.867821211000091 ], [ -72.579363909999927, 19.868075038000086 ], [ -72.578831061999949, 19.868591549000087 ], [ -72.578328637999903, 19.868991101000063 ], [ -72.578165679999927, 19.869666218000077 ], [ -72.577835592999918, 19.87003199500009 ], [ -72.577424782999913, 19.870053493000057 ], [ -72.576951821999899, 19.870399177000081 ], [ -72.576370441999927, 19.870969283000079 ], [ -72.575992167999914, 19.871361486000069 ], [ -72.575356179999915, 19.871759209000061 ], [ -72.574867107999921, 19.871906035000052 ], [ -72.574036899999953, 19.872517796000068 ], [ -72.573619620999921, 19.872963725000091 ], [ -72.57294537699994, 19.873360825000077 ], [ -72.572392067999942, 19.87396741200007 ], [ -72.571909069999947, 19.874340121000046 ], [ -72.571181591999903, 19.874474657000064 ], [ -72.570234408999909, 19.874615220000067 ], [ -72.5687325049999, 19.874829552000051 ], [ -72.568274268999915, 19.874832323000078 ], [ -72.568164462999903, 19.875146916000062 ], [ -72.568229638999924, 19.875879307000048 ], [ -72.56791041799994, 19.876154835000079 ], [ -72.567789709999943, 19.876559565000036 ], [ -72.567564705999928, 19.876917726000045 ], [ -72.567338736999943, 19.877339076000055 ], [ -72.566982582999913, 19.877532838000036 ], [ -72.56599693499993, 19.877690999000038 ], [ -72.565629737999927, 19.877984013000059 ], [ -72.565084036999906, 19.87808489300005 ], [ -72.564790968999944, 19.877900222000051 ], [ -72.5641541599999, 19.878343031000043 ], [ -72.563460138999915, 19.878161989000091 ], [ -72.562671548999901, 19.877916359000039 ], [ -72.562429625999926, 19.877506760000074 ], [ -72.561552278999898, 19.877449510000076 ], [ -72.561254226999949, 19.878213040000048 ], [ -72.561259789999951, 19.87972125400006 ], [ -72.55950957899995, 19.879317976000038 ], [ -72.558365236999919, 19.879239083000073 ], [ -72.556237736999947, 19.877918531000091 ], [ -72.555268948999924, 19.877598168000077 ] ] ] ] } },
      { "type": "Feature",
        "properties": { "id": "mother", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.5228609, 19.8451211 ] } },
      { "type": "Feature",
        "properties": { "id": "father", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.348253, 18.5242284 ] } },
      { "type": "Feature",
        "properties": { "id": "soil", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.1241998, 19.670388 ] } },
      { "type": "Feature",
        "properties": { "id": "junior", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.4092495, 18.5345373 ] } },
      { "type": "Feature",
        "properties": { "id": "dominique", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.348253, 18.5242284 ] } },
      { "type": "Feature",
        "properties": { "id": "newborn", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.104836, 18.8344163 ] } },
      { "type": "Feature",
        "properties": { "id": "landy", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "Point", "coordinates": [ -72.348253, 18.5242284 ] } },
      // { "type": "Feature",
      //   "properties": { "id": "families", "place_name": "isabel leyte", "view_bounds": [
      //     [18.050456, -75.040171], [20.204108, -72.280479] ]},
      //   "geometry": { "type": "Point", "coordinates": [ -72.330206, 19.538998 ] } },
      { "type": "Feature",
        "properties": { "id": "haitianredcross", "place_name": "isabel leyte", "view_bounds": [
          [18.550456, -74.5244355202], [19.704108, -71.5813140869] ]},
        "geometry": { "type": "MultiPoint", "coordinates": [[ -72.295814, 18.571665 ], [ -72.346958, 18.549928 ]] } }
        ];
      // define tile layer for base map
      var tileLayerUrl = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
      // var tileLayerUrl = 'http://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png';
      var tileLayer = L.tileLayer(tileLayerUrl);

      // setup leaflet map with desired options
      
      var storyWidth = $(window).width() * 0.60;
      var padding = L.point(storyWidth, 0);
      var map = L.map('map', { 
          dragging: false,
          touchZoom: false,
          scrollWheelZoom: false,
          doubleClickZoom: false,
          boxZoom: false,
          keyboard: false,
          zoomControl: false,
          attributionControl: false,  
          // zoom: 6,
          // center: [11, 125.7],     
          layers: [tileLayer]
        }).fitBounds([[18.550456, -74.5244355202], [19.704108, -71.5813140869]], {
          paddingTopLeft: padding
        });
      // }).fitBounds([[18.050456, -75.840171], [20.204108, -72.780479]], {
      //   paddingTopLeft: padding
      // });

      //add markers to map
      var markerMap = {};
      // var spots = L.geoJson(storyPoints, {
      //   pointToLayer: function (feature, latlng) {
      //       var thisIcon = L.divIcon({
      //         className: feature.properties.id +' spot spot-' + feature.properties.id,
      //         iconAnchor: [60,60]
      //       });
      //       var thisMarker = L.marker(latlng, {
      //         icon: thisIcon, 
      //         clickable: false
      //       });
      //       markerMap[feature.properties.id] = thisMarker;
      //       return thisMarker;
      //   }
      // }).addTo(map);

      var spots = L.geoJson(storyPoints, {
        style: function (feature) {
          return feature.properties && feature.properties.style;
        },
        pointToLayer: function (feature, latlng) {
            var thisIcon = L.divIcon({
              className: feature.properties.id +' spot spot-' + feature.properties.id,
              iconAnchor: [60,60]
            });
            var thisMarker = L.marker(latlng, {
              icon: thisIcon, 
              clickable: false
            });
            markerMap[feature.properties.id] = thisMarker;
            return thisMarker;
        }
      }).addTo(map);

      // Array of story section elements.
      var sections = document.getElementsByTagName('section');      

      // Helper to set the active section.
      var previousActive = 0;
      var setActive = function(index, ease) {
          var activeSpotId = sections[index].id;
          // Set active class on sections
          _(sections).each(function(s) { s.className = s.className.replace(' active', '') });
          sections[index].className += ' active';

          // if sections[index].id == cover || movement || etc. then add a class for display:none for all the markers

          // Set active class on markers
          $.each($('.spot'), function(index, spotDiv) {     
            if($(spotDiv).hasClass(activeSpotId)){
              $(spotDiv).addClass('active');
            } else {
              $(spotDiv).removeClass('active');
            }
          });
          
          // Set a body class for the active section.
          document.body.className = 'section-' + index;

          // Ease map to active marker.
          if (ease && previousActive !== index && markerMap[activeSpotId] !== undefined) {
            var storyWidth = $(window).width() * 0.6;
            var padding = L.point(storyWidth, 0)
            map.fitBounds(markerMap[activeSpotId].feature.properties.view_bounds, {
              paddingTopLeft: padding,
              // zoom: {
              //   animate: true,
              //   duration: 6
              // },
              pan: {
                animate: true,
                duration: 2.5
              }
            });

            previousActive = index;
          } 
          return true;
      };

      // Bind to scroll events to find the active section.
      window.onscroll = _(function() {
        // IE 8
        if (window.pageYOffset === undefined) {
          var y = document.documentElement.scrollTop;
          var h = document.documentElement.clientHeight;
        } else {
          var y = window.pageYOffset;
          var h = window.innerHeight;
        }

        // If scrolled to the very top of the page set the first section active.
        if (y === 0) return setActive(0, true);

        // Otherwise, conditionally determine the extent to which page must be
        // scrolled for each section. The first section that matches the current
        // scroll position wins and exits the loop early.
        var memo = 0;
        var buffer = (h * 0.3333);
        var active = _(sections).any(function(el, index) {
          memo += el.offsetHeight;
          return y < (memo-buffer) ? setActive(index, true) : false;
        });

        // If no section was set active the user has scrolled past the last section.
        // Set the last section active.
        if (!active) setActive(sections.length - 1, true);
      }).debounce(10);

      // Set map to first section.
      setActive(0, false);

      

}
}

// show disclaimer text on click of dislcaimer link
      function showDisclaimer() {
          window.alert("The maps used do not imply the expression of any opinion on the part of the International Federation of Red Cross and Red Crescent Societies or National Societies concerning the legal status of a territory or of its authorities.");
      }

fullSetup();