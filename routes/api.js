const express = require('express');
const router = express.Router();
const https = require("https");

// github end point to fetch information about github/tmtanzeel only
router.get('/github/userinfo', async function (req, res) {
    const options = {
        hostname: 'api.github.com',
        path: '/users/tmtanzeel',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAuth: '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'
    }
    https.get(options, function (apiRes) {
        apiRes.pipe(res);
    }).on('error', (e) => {
        console.error(e);
        res.status(500).send('Something went wrong');
    });
});

// github end point to fetch information about a repository of tmtanzeel
// this end point can be used to fetch the last updated timestamp
router.get('/github/repoinfo', async function (req, res) {
    const options = {
        hostname: 'api.github.com',
        path: '/repos/tmtanzeel/socialcoder',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAuth: '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'
    }
    https.get(options, function (apiRes) {
        apiRes.pipe(res);
    }).on('error', (e) => {
        console.error(e);
        res.status(500).send('Something went wrong');
    });
});

// github end point to fetch information about a repository of tmtanzeel
// this end point can be used to fetch the last updated timestamp
router.get('/github/commitinfo', async function (req, res) {
    const options = {
        hostname: 'api.github.com',
        path: '/repos/tmtanzeel/socialcoder/commits',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAuth: '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'
    }
    https.get(options, function (apiRes) {
        apiRes.pipe(res);
    }).on('error', (e) => {
        console.error(e);
        res.status(500).send('Something went wrong');
    });
});

module.exports = router;
