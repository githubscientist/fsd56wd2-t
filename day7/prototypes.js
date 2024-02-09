function Vote(votes = 0) {
    Vote.totalVotes = 0;
    Vote.availableVotes = 100;

    this.votes = votes;

    this.getVote = function() {
        return this.votes;
    }

    this.setVote = function (votes) {
        this.votes = votes;
    }

    this.addVote = function () {
        this.votes++;
        Vote.totalVotes++;
        Vote.availableVotes--;
    }

    this.updateVote = function (votes) {
        this.votes += votes; // this.votes = this.votes + votes;
        Vote.totalVotes += votes;
        Vote.availableVotes -= votes; // Vote.availableVotes = Vote.availableVotes - votes;
    }

    this.toString = function () {
        let outputString = `Available Votes: ${Vote.availableVotes}
Total Votes: ${Vote.totalVotes}
Your Votes: ${this.votes}
`;
        return outputString;
    }
}

// create the first candidate
let candidateA = new Vote(10);
let candidateB = new Vote();
let candidateC = new Vote();

candidateA.addVote();
candidateA.addVote();
candidateA.addVote();
candidateA.addVote();
candidateA.addVote();

candidateB.addVote();
candidateB.addVote();
candidateB.addVote();

candidateC.addVote();
candidateC.addVote();
candidateC.addVote();
candidateC.addVote();

candidateC.updateVote(6);

console.log(candidateA.toString());
console.log(candidateB.toString());
console.log(candidateC.toString());
