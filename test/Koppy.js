
const Koppy = artifacts.require('../contracts/Koppy.sol');

contract('AideEvent', (accounts) => {

  it ('getUserCount.', async () => {
    const ko = await Koppy.new();
    await ko.registerUser('abc')
    assert.equal(await ko.getUserCount.call(), 1);
  });

  it ('getUportAddress.', async () => {
    const ko = await Koppy.new();
    await ko.registerUser('abc');
    users = await ko.getUsers.call();
    assert.equal(await ko.getUportAddress.call(users[0]), 'abc');
  });

  it ('getUsers.', async () => {
    const ko = await Koppy.new();
    await ko.registerUser('abc');
    users = await ko.getUsers.call();
    assert.equal(await users.length, 1);
  });

});
