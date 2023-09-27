const transactions = [
    {
      id: 3,
      sourceAccount: 'A',
      targetAccount: 'B',
      amount: 100,
      category: 'eating_out',
      time: '2018-03-02T10:34:30.000Z',
    },
    {
      id: 1,
      sourceAccount: 'A',
      targetAccount: 'B',
      amount: 100,
      category: 'eating_out',
      time: '2018-03-02T10:33:00.000Z',
    },
    {
      id: 6,
      sourceAccount: 'A',
      targetAccount: 'C',
      amount: 250,
      category: 'other',
      time: '2018-03-02T10:33:05.000Z',
    },
    {
      id: 4,
      sourceAccount: 'A',
      targetAccount: 'B',
      amount: 100,
      category: 'eating_out',
      time: '2018-03-02T10:36:00.000Z',
    },
    {
      id: 2,
      sourceAccount: 'A',
      targetAccount: 'B',
      amount: 100,
      category: 'eating_out',
      time: '2018-03-02T10:33:50.000Z',
    },
    {
      id: 5,
      sourceAccount: 'A',
      targetAccount: 'C',
      amount: 250,
      category: 'other',
      time: '2018-03-02T10:33:00.000Z',
    },
  ];
 
  

function findDuplicateTransactions(transactions = []){
    transactions.sort((a, b) => new Date(a.time) - new Date(b.time));
    let duplicates = []
    let same = []
    let src, dst;
    while(transactions.length > 1){
      src = 0
      dst = 1
      same = [src]
      while ((new Date(transactions[dst].time) - new Date(transactions[src].time)) <= 60000 && src < transactions.length -1){
        if(compare_equal(transactions[src], transactions[dst])){
          same.push(dst)
          src = dst
        }
        dst += 1
        if (dst === transactions.length){
          break
        }
      }

      
      if (same.length > 1){
        let temp = []
        while(same.length){
          let item = transactions.splice(same.pop(), 1)
          temp.unshift(item[0])
        }
        duplicates.push(temp)
        same = []
      } else{
        transactions.shift()
      }

      if (transactions.length == 1){
        break;
      }  
      
    }
    return duplicates
  }
  
  function compare_equal(t1,t2){
    if (t1.sourceAccount === t2.sourceAccount && t1.targetAccount === t2.targetAccount && t1.amount === t2.amount && t1.category === t2.category){
      return true;
    }else{
      return false;
    }    
  }
  console.log(transactions)


export default findDuplicateTransactions;

