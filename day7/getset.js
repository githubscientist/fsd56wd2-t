class Vote {
    static totalVotes = 0;
    static availableVotes = 100;

    constructor(votes = 0){
        this.votes = votes;
    }

    get vote() {
        return this.votes;
    }

    set vote(votes) {
        this.votes = votes;
    }

    addVote() {
        this.votes++;
        Vote.totalVotes++;
        Vote.availableVotes--;
    }

    updateVote(votes) {
        this.votes += votes; // this.votes = this.votes + votes;
        Vote.totalVotes += votes;
        Vote.availableVotes -= votes; // Vote.availableVotes = Vote.availableVotes - votes;
    }

    toString() {
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

// console.log(candidateA.toString());
// console.log(candidateB.toString());
// console.log(candidateC.toString());

candidateA.vote = 25;

console.log(candidateA.vote);