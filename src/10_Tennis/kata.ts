/* eslint-disable */

export interface TennisGame {
  wonPoint(playerName: string): void;
  getScore(): string;
}

export class TennisGame1 implements TennisGame {
  private m_score1 = 0;
  private m_score2 = 0;
  //@ts-ignore
  private player1Name: string;
  //@ts-ignore
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1') this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) {
      return this.translateScore();
    }

    if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      return this.translateScore2('');
    }

    return this.newMethod1();
  }

  private newMethod1() {
    let score = '';
    let tempScore = 0;
    for (let i = 1; i < 3; i++) {
      if (i === 1) {
        tempScore = this.m_score1;
      } else {
        score += '-';
        tempScore = this.m_score2;
      }
      score = this.newMethod2(tempScore, score);
    }
    return score;
  }

  private newMethod2(tempScore: number, score: string) {
    switch (tempScore) {
      case 0:
        score += 'Love';
        break;
      case 1:
        score += 'Fifteen';
        break;
      case 2:
        score += 'Thirty';
        break;
      case 3:
        score += 'Forty';
        break;
    }
    return score;
  }

  private translateScore2(score: string) {
    const minusResult: number = this.m_score1 - this.m_score2;
    if (minusResult === 1) score = 'Advantage player1';
    else if (minusResult === -1) score = 'Advantage player2';
    else if (minusResult >= 2) score = 'Win for player1';
    else score = 'Win for player2';
    return score;
  }

  private translateScore() {
    switch (this.m_score1) {
      case 0:
        return 'Love-All';
      case 1:
        return 'Fifteen-All';
      case 2:
        return 'Thirty-All';
      default:
        return 'Deuce';
    }
  }
}
