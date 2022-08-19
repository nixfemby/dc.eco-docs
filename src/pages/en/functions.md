---
title: Functions
description: Overview of all functions and examples!
layout: ../../layouts/MainLayout.astro
---

On this page you'll find an Overview of all available functions, the arguments they take and so on. <br/> The economy system will be referred to as `eco` in the following.

Please also note that all functions have to be used in the following way: <br/>
```js

let data = await ...


```

### setMongoURL(url)

The setMongoURL function should be called as soon as the package is required. It takes a single string as input, your MongoDB connection string.
Please also keep in mind to [Percent Encode](https://gist.github.com/wxifuwu/e14c54c866e40faeb39c3d80ec3b6b13) all special characters!

### createProfile(userID)

The createProfile function creates a user profile in the global economy system and takes the userID as String. Every user get's given a bank and wallet balance of 1. <br/> _This is only intended for use in events such as guildMemberAdd as functions that _**add**_ balance automatically create a profile if the user doesn't exist._ <br/> This function returns the newly created profile.

### deleteProfile(userID)

The deleteProfile function also takes only a userID as String and deletes the data of that user. If the user isn't found, false will be returned, otherwise the deleted profile will be returned.

### addWalletBal(userID, balance)

The addWalletBal function adds given balance to the given user. Parameters are passed in as String userID and Number balance. Balance has to be any number above zero and will be validated. If the user profile wasn't found, it will be created with balance as the wallet balance and 1 as the bank balance. This function returns the updated user profile

### addBankBal(userID, balance)

The addWalletBal function adds given balance to the given user. Parameters are passed in as String userID and Number balance. Balance has to be any number above zero and will be validated. If the user profile wasn't found, it will be created with balance as the bank balance and 1 as the wallet balance. This function returns the updated user profile

### setBankBal(userID, balance) 

The setBankBal function replaces the given users balance. Parameters are passed in as String userID and Number balance. Balance has to be any number above zero and will be validated. If the user profile was not found, false will be returned, otherwise the updated profile will be returned.

### setWalletBal(userID, balance) 

The setWalletBal function replaces the given users balance. Parameters are passed in as String userID and Number balance. Balance has to be any number above zero and will be validated. If the user profile was not found, false will be returned, otherwise the updated profile will be returned.

### subtractWalletBal(userID, balance)

The subtractWalletBal function subtracts the given amount from the users balance. Parameters are passed in as String userID and Number balance. Balance has to be any number above zero and will be validated. If the user profile was not found, false will be returned, otherwise the updated profile will be returned.

### subtractBankBal(userID, balance)

The subtractBankBal function subtracts the given amount from the users balance. Parameters are passed in as String userID and Number balance. Balance has to be any number above zero and will be validated. If the user profile was not found, false will be returned, otherwise the updated profile will be returned.

### fetch(userID)

The fetch function takes the userID as String and returns the user profile. If the user wasn't found, false will be returned.

### createShopItem()

The createShopItem function takes the following Parameters: <br/> String guildID, String name, String type, Number price, Object meta

The name has to be unique per guild. Type can be anything, sane examples would be "Role" and "Custom", however handling those is up to you. Meta can hold any properties needed, such as if you were using the Shop to sell roles, their respective IDs. Meta has to be passed as a JS object.

Returns false if the item exists, otherwise returns the updated guild shop.

### deleteShopItem(guildID, name)

The deleteShopItem function takes the guildID and name of the item you want to delete as Strings. If the item doesn't exist, false will be returned. Otherwise, the updated shop will be returned.

### fetchShopItem(guildID, name)

The fetchShopItem function takes the guildID and name of the item you want to fetch as Strings. If the item doesn't exist, false will be returned. Otherwise, the fetched item will be returned.

### deleteGuildShop(guildID)

The deleteGuildShop function takes the guildID as String and deletes the entire available data for a guild. Returns the guild object that has been deleted.

### fetchShopItems(guildID)

The fetchShopItems function takes the guildID as String and returns all available items as an array. If the array is empty, false will be returned instead.

### taxCalc(amount, tax)

The taxCalc function calculates the tax and money after taxing. Amount and Tax are supplied as Number and Tax is limited to a sane default of 60%. Returns an object with the properties taxedTotal, the amount the seller receives and taxIncome, the amount whoever collects the tax receives.

### tax(amount, tax, ownerID)

The tax function calculates the tax and adds it to whoever's ID is supplied directly. Amount and Tax are passed as Numbers, ownerID as a String. If the user doesn't have a profile, it will be created. Returns the amount that goes to the seller.

### createGuildProfile(guildID)

The createGuildProfile function takes the guildID as String and creates a guild economy profile. Should only be used from events, as addGuildBalance creates a profile as well.

### addGuildBalance(guildID, balance)

The addGuildBalance function adds balance to a guild profile, which will be created if it doesn't exist. Takes a String for the ID and Number for the amount. Returns the profile of the guild.

### setGuildBalance(guildID, balance)

The addGuildBalance function sets balance for a guild profile. Takes a String for the ID and Number for the amount. Returns the profile of the guild. If the guild doesn't have an economy profile, false will be returned.

### subtractGuildBalance(guildID, balance)

The subtractGuildBalance function subtracts balance from a guild profile. Takes a String for the ID and Number for the amount. Returns the profile of the guild. If the guild doesn't have an economy profile, false will be returned.

### fetchGuildProfile(guildID)

The fetchGuildProfile function takes a String for the guildID and simply returns it's profile. If not found, false will be returned.

### deleteGuildProfile(guildID)

The deleteGuildProfile function deletes a guild economy profile for the guild whose ID was given as a String. Returns false if the guild was not found, otherwise will return the deleted profile.

### pushToInventory(guildID, userID, item)

The pushToInventory function adds any Object to your inventory. Parameters are String guildID, String userID and Object item. **item.name** is required by should be automatically included if you only push objects from the guild shop. Creates a inventory for the specified user in the specified guild if not present, returns the new inventory object.

### removeFromInventory(guildID, userID, item)

The removeFromInventory function removes an Object from your inventory. Parameters are String guildID, String userID and Object item. **item.name** is required. Will return false if the user doesn't have an inventory or doesn't have that item. Otherwise returns the updated inventory.

### fetchFromInventory(guildID, userID, item)

The fetchFromInventory function fetches all data about a specific item in the users inventory. Parameters are String guildID, String userID and Object item. **item.name** is required. If the user doesn't have an inventory in the specified guild or doesn't have that item, false will be returned. Otherwise returns the item object.

### fetchInventory(guildID, userID)

The fetchInventory function fetches all items in a users inventory. Parameters are String guildID and String userID. If the user doesn't have an inventory for that guild, false will be returned. Otherwise returns the inventory object.