/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Document Ready Function*/
$(document).ready(function () {
    //Todo code when it loads

    var val = $("#idSelectDisplayMode").val();
    selectDisplayMode(val);
    
       
    //Filters
    registerEvents();


});

function selectDisplayMode(val) {

    if (val == "List") {
        //Remove table
        $("#idTable").remove();
        //Remove Gallery
        $("#idGallery").remove();

        //Call function to create listTableDisplayMode
        listDisplayMode();

    } else if (val == "Table") {
        //Remove Gallery
        $("#idGallery").remove();

        //Remove List
        $("#idMasterListView").remove();

        //Call function to create tableDisplayMode
        tableDisplayMode();

    } else {//Must be gallery
        //Remove table
        $("#idTable").remove();

        //Remove list        
        $("#idMasterListView").remove();

        //Call function to create galleryDisplayMode
        galleryDisplayMode();

    }
}
function tableDisplayMode() {
    addTableDiv()//Create table div
    //Create filter div 
    tableHeader();//Create table header
    addTableRows();//Add table rows
    addTableRows(); //Add another table row
    registerEvents();//Register Events to their respective event handlers

}

function addTableDiv() {

    //Add tabl view div
    /*
     var str = "<div id='tableView' class='row search-results'></div>";
     $("#mainContainer").append(str);//Add the tabe header*/

    //add table
    str = "<div id='idTable' class='col-xs-9'></div>";
    $("#tableView").prepend(str);//Add the tabe div

    //Add map directory div
    str = "<div id='idMapDirectory' class='row search-results-table-heading'></div>";
    $("#idTable").append(str);//Add the map directory div   

    //Add separator
    str = "<div class='menu-separator search-results-table-heading'></div>";
    $("#idTable").append(str);//Add separator div  

    //Results row div
    str = "<div id='resultRow' class='row result-row'></div>";
    $("#idTable").append(str);//Add separator div  
}


function tableHeader() {
    //Function to create the 
    var class2 = "col-xs-2"

    var str3 = '<div class=' + class2 + '>Read More</div>';
    var str4 = '<div class=' + class2 + '>Show on Map</div>';
    var str5 = '<div class=' + class2 + '>Download</div>';

    var str = str3 + str4 + str5;

    jQuery('<div/>', {
        "id": 'idTitle',
        "class": 'col-xs-3'}).appendTo("#idMapDirectory");

    $("#idMapDirectory").append(
            $('<div/>')
            .addClass("col-xs-3")
            .text("Format")
            );

    $("#idMapDirectory").append(str);//Add the tabe header

    $("#idTitle").append('<p>Title</p>'); //Add Test to the first row

    //Add the class
    $('#idTitle')
            .addClass('search-results-table-heading');
}

function addTableRows() {

    var str = "<div class='col-xs-3'><p>1m shadow model of DTM</p></div>";

    str += "<div class='col-xs-3'>" +
            "<a href='#' title='View all services and datasets from Trondheim'>" +
            "<p>Shapefile</p>" +
            "</a>" +
            "</div>";
    str += "<div class='col-xs-2'>" +
            "<span class='glyphicon glyphicon-info-sign'></span>" +
            "</div>";

    str += "<div class='col-xs-2'>" +
            "<span class='glyphicon glyphicon-map-marker'></span>" +
            "</div>";

    str += "<div class='col-xs-2'>" +
            "<span class='glyphicon glyphicon-cloud-download'></span>" +
            "</div>";

    str += "<div class='col-xs-12'>" +
            "<hr>" +
            "</div>";
    $("#resultRow").append(str);
}

function registerEvents() {
    var element = document.getElementById('idFilterBytheme');
    element.onclick = FilterBythemeEventHandler; // Assigned

    var element = document.getElementById('idFilterByType');
    element.onclick = FilterByTypeEventHandler; // Assigned  

}

var idFilterBytheme = 0;
function FilterBythemeEventHandler() {

    if (idFilterBytheme == 0) {
        $('#idFilterBytheme').removeClass('glyphicon glyphicon-triangle-right');
        $('#idFilterBytheme').addClass('glyphicon glyphicon-triangle-bottom');
        idFilterBytheme = 1;
    } else
    {
        $('#idFilterBytheme').removeClass('glyphicon glyphicon-triangle-bottom');
        $('#idFilterBytheme').addClass('glyphicon glyphicon-triangle-right');
        idFilterBytheme = 0;
    }
}

var idFilterByType = 0;
function FilterByTypeEventHandler() {

    if (idFilterByType == 0) {
        $('#idFilterByType').removeClass('glyphicon glyphicon-triangle-right');
        $('#idFilterByType').addClass('glyphicon glyphicon-triangle-bottom');
        idFilterByType = 1;
    } else
    {
        $('#idFilterByType').removeClass('glyphicon glyphicon-triangle-bottom');
        $('#idFilterByType').addClass('glyphicon glyphicon-triangle-right');
        idFilterByType = 0;
    }
}



/*
 * 
 * Code for the Gallery Goes Here
 * 
 * 
 */


function galleryDisplayMode() {
    //Add Gallery div
    var str = "<div id='idGallery' class='col-xs-9'></div>";
    $("#tableView").prepend(str);//Add the tabe div
    //
    //Create Filter div

    //Create gallery blocks

    str = createGalleryBlock("Map hewn and treasured recreation areas", "images/mapdirectory/thumbnail_025.dat", "#");
    $("#idGallery").append(str);
    str = createGalleryBlock("Main fairway and biledelig", "images/mapdirectory/thumbnail_026.dat", "#");
    $("#idGallery").append(str);
    str = createGalleryBlock("Gravel and crushed", "images/mapdirectory/thumbnail_027.dat", "#");
    $("#idGallery").append(str);
}

function createGalleryBlock(teaserHeadingText, teaserbackgroundimageurl, destinationURL) {

    var str =
            "<div class='search-results-gallery-image layoutblock'>" +
            "<div class='block shortcutpageteaserblock size-4 col-xs-4'>" +
            "<div class='teaser-with-background-image'>" +
            "<a href=" + destinationURL + "'>" +
            "<div class='teaser-background-image' style='background: url(" + teaserbackgroundimageurl + "' ) no-repeat scroll center center;'>" +
            "<div class='teaser-overlay'>" +
            "<div class='teaser-caption'>" +
            "<div class='teaser-heading'><font><font>" + teaserHeadingText + "</font></font></div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</a>" +
            "</div>" +
            "<div class='clearfix'></div>" +
            "</div>" +
            "</div>";

    return str;
}


/*
 * 
 * Code for the List Goes Here
 * 
 * 
 */

function listDisplayMode() {
    //Add list view div
    var str = "<div id='idMasterListView' class='listView'>\n\
        <div id='idListView' class='col-xs-9'></div></div>";
    $("#tableView").prepend(str);//Add the tabe div

    //json object for data interchange
    var listBlockParams = 
            {"listView":
                [
                    {"iconPath": "images/mapdirectory/971040238_kv_logo100.png"},
                    {"searchResultsName": "Administrative Units Norway"},
                    {"searchResultsDescriptionTitle": "Mapping Authority"},
                    {"searchResultsDescriptionText": "Administrative units Norway shows national, county and municipal " +
                        "subdivision in the country with the most accurate boundaries recorded digitally and collected in a single data set. " +
                        "The data set contains the administrative units nation, county and municipality, ..."},
                    {"format": "<span class='label label-datasett' title='Available as Dataset'>Dataset</span>"},
                    {"thumbnail": "images/mapdirectory/thumbnail"}

                ]
            };
            //alert(listBlockParams.listView[0].iconPath);
            
    //Create list block
    str = createListBlock(listBlockParams);
            
    $("#idListView").append(str);
}

function createListBlock(listBlockParams) {
    //Create List Block
    var str;
    str =
            "                        <div class='row result-row metadata'>" +
            "                            <div class='col-sm-1 search-results-logo'>" +
            "                                <a href='#'>" +
            "                                    <img title='View all services and datasets from Mapping Authority' " +
            "                                         alt='Logo Kartverket' " +
            "                                         class='img-responsive center-block' " +
            "                                         src=" + listBlockParams.listView[0].iconPath + ">" +
            "                                </a>" +
            "                            </div>" +
            "                            <div class='col-xs-6 search-results-title'>" +
            "                                <div class='row'>" +
            "                                    <a href='#'>" +
            "                                        <p role='button' class='role-button search-results-name'>" + listBlockParams.listView[1].searchResultsName + "</p>" +
            "                                    </a>" +
            "                                    <div class='search-results-description'>" +
            "                                        <a title='View all services and datasets from Mapping Authority' href='#'>" +
            "                                            <p> " + listBlockParams.listView[2].searchResultsDescriptionTitle  + "</p>" +
            "                                        </a>" +
            "                                        <p>" +
                                                        listBlockParams.listView[3].searchResultsDescriptionText  +
            "                                        </p>" +
            "                                    </div>" +
            "                                </div>" +
            "                                <div class='row'>" +
            "                                    <div class='col-xs-8'>" +
            "                                        <p>" +
            "                                            Available As:" +
                                                            listBlockParams.listView[4].format  +
            "                                        </p>" +
            "                                    </div>" +
            "                                </div>" +
            "                            </div>" +
            "                            <div class='col-xs-2 search-results-action-buttons'>" +
            "                                <a class='btn btn-default' title='' data-placement='bottom' data-toggle='tooltip' " +
            "                                   href='#' " +
            "                                   data-original-title='Read more about Administrative units Norway'>" +
            "                                    <span class='custom-icon custom-icon-info'></span>" +
            "                                    <span class='button-text'> Read More</span>" +
            "                                </a>" +
            "                                <a class='btn btn-default' target='_top' title='' data-placement='bottom' data-toggle='tooltip' " +
            "                                   onclick='ga('send', 'event', 'Nedlasting', 'viskart');' " +
            "                                   href='#' data-original-title='View Administrative units Norway in map'>" +
            "                                    <span class='custom-icon custom-icon-kartmarkoer'></span>" +
            "                                    <span class='button-text'> Show in Map</span>" +
            "                                </a>" +
            "                                <a class='btn btn-default' target='_top' title='' data-placement='bottom' data-toggle='tooltip' " +
            "                                   onclick='ga('send', 'event', 'Nedlasting', 'lastned');' " +
            "                                   href='#' data-original-title='Download data for Administrative units Norway'>" +
            "                                    <span class='custom-icon custom-icon-lastned'></span>" +
            "                                    <span class='button-text'> Download</span>" +
            "                                </a>" +
            "                            </div>" +
            "                            <div class='col-xs-2 search-results-list-image'>" +
            "                                <a href='#'>" +
            "                                    <img src=" + listBlockParams.listView[5].thumbnail   + ">" +
            "                                </a>" +
            "                            </div>" +
            "                        </div>                      ";

    return str;
}