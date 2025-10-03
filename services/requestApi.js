import http from "./http-common";

class DataService {
  getAllTransactions(token) {
    return http.get("application/All_transactionHashes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getTransactionDetails(hash) {
    return http.get(`api/transactionByHash?hash=${hash}`);
    
  }

  getAllBlocks() {
    return http.get(`api/totalBlocks_ByCount?numBlocks=500 `);
  }

  getBlockDetails(block) {
    return http.get(`api/transactionsByblockNumber?blockNumber=${block}`);
  }

  getAllChanges() {
    return http.get(`application/getAuditSummaries`);
  }

  getAuditDetails(advid, appid) {
    return http.get(
      `application/getAuditTrail?adNumber=${advid}&applicationId=${appid}`,
    );
  }
}

const dataService = new DataService();

export default dataService;
