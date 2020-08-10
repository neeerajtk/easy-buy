import {createSelector} from 'reselect';
import collection from '../../pages/collection/collection';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => 
        collections[collectionUrlParam]
)