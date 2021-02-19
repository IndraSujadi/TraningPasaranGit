"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// curl -i url ini untuk coba komunikasi sama url nya dulu di terminal
// module untuk bisa melakukan fetsh melalui node
var node_fetch_1 = __importDefault(require("node-fetch"));
// let repoName;
// let repoSubscriber;
node_fetch_1.default("https://api.github.com/orgs/Microsoft/repos")
    .then(function (response) {
    console.log("status:", response.status);
    if (response.status !== 200) {
        throw new Error("Unexpected status");
    }
    var contentType = response.headers.get("Content-Type");
    if (contentType !== "application/json; charset=utf-8") {
        throw new Error("Unexpexted content type.");
    }
    // setelah cek status dan tipe data atau content yang diterima barulah ambil datanya
    var promise = response.json();
    return promise;
})
    .then(function (jsonData) {
    var repositories = jsonData.map(function (repo) {
        console.log(repo.name);
        return repo.name;
    });
    // repoName = repositories;
    return repositories;
})
    .then(function (repositories) {
    var repositoriesUrl = repositories.map(function (repo) {
        var url = "https://api.github.com/repos/Microsoft/" + repo;
        return url;
    });
    return repositoriesUrl;
})
    .then(function (repositoriesUrl) {
    var subscribersUrl = repositoriesUrl.map(function (repoUrl) {
        var subcribersUrl = repoUrl + "/subscribers";
        return subcribersUrl;
    });
    return subscribersUrl;
})
    .then(function (subscribersUrl) {
    subscribersUrl.map(function (subscriberUrl) {
        node_fetch_1.default(subscriberUrl)
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Unexpected Status");
            }
            if (response.headers.get("Content-Type") !==
                "application/json; charset=utf-8") {
                throw new Error("Unexpected Content");
            }
            return response.json();
        })
            .then(function (subscriberData) {
            var totalSubs = subscriberData.length;
            console.log(totalSubs);
            // repoSubscriber = totalSubs;
        });
    });
});
// fetch("https://api.github.com/repos/Microsoft/car-trumps"); done
// fetch("https://api.github.com/repos/microsoft/car-trumps/subscribers");
//# sourceMappingURL=getData.js.map