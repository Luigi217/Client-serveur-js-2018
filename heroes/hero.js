const requestPromise = require('request-promise');

const hero = {
  name: '',
  x: 0,
  y: 0,
  target: ''
};

const target = {
  name: '',
  x: 0,
  y: 0,
  isTargeted: false
};

const updatePos = () => {
  // Should get target pos + URI

  requestPromise({
    method: 'POST',
    uri: '', // TODO
    body: {
      name: hero.name,
      x: hero.x,
      y: hero.y,
      target: hero.target
    },
    json: true
  })
    .then(function () {
      // POST succeded...
    })
    .catch(function () {
      // POST failed...
    });
};

const updateTarget = () => {
  //  URI

  requestPromise({
    method: 'POST',
    uri: '', // TODO
    header: {

    },
    body: {
      name: target.name,
      x: target.x,
      y: target.y,
      isTargeted: target.isTargeted
    },
    json: true
  });
};

const killTarget = () => {
  // URI

  requestPromise({
    method: 'POST',
    uri: '', // TODO
    header: {

    },
    body: {
      name: target.name
    },
    json: true
  });
};

const getMap = () => {
  const getMapURI = '/getMap';

  requestPromise({
    method: 'GET',
    uri: '', // TODO
    header: {

    },
    body: {

    }
  })
    .then(() => {

    })
    .catch(

    );
};

const getTarget = () => {
  // URI

  requestPromise({
    // On lance une requête à la DB, avec les infos du hero.
    // Doit renvoyer sa cible, si elle existe, rien sinon
    method: 'GET', // POST, should reply with hero's target
    uri: '', // TODO
    header: {

    },
    body: {

    }
  })
    .then(() => {

    })
    .catch(

    );
};

const move = () => {
  if (target.name === '') { // If there is no target, find one
    getTarget();
  } else {
    // TODO
  }
};

// SetTimeout
