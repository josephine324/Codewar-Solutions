/* We have a pagination class that has to do alot of stuff.
we have a collection of items we want to put on the page the items per page that should be on the page
so the class will just help us figure out how many pages were created andthe lines at each specific line page*/
class paginationHelper {
    constructor(collection, itemsPerPage){
        this.collection= collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount(){
        return this.collection.length;
    }
    pageCount(){
        return Math.ceil(this.collection.length/this.itemsPerPage);
    }
    pageItemCount(pageIndex){
        /*this one will findthe number of items (like it will retrieve itemsPer Page) on a certain page*/ 
        if(pageIndex < 0 || pageIndex >this.pageCount()) return -1
        if(pageIndex < this.pageCount()-1){
            return this.itemsPerPage
        }
        return this.collection.length%this.itemsPerPage || this.itemsPerPage;
    }
    pageIndex(itemIndex){
        /*now we are going to see where individual elements were placed (like we have  acollection and we want to see in our collection on which page our items were placed)*/
        if(itemIndex < 0 || itemIndex >= this.itemCount()) return -1
        return Math.floor(itemIndex /this.itemsPerPage);
    }
} 