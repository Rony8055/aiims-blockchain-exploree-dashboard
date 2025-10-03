"use server";
import dataService from "@/services/requestApi";

async function generateServerAction(func, ...args) {
  let responseObj = {
    data: null,
    error: null,
    func: null,
  };

  try {
    responseObj.func = func.toString();
    let response;
    if (token) {
      const userAccessToken = await getServerSession(authOptions);
      const session = userAccessToken.user.token;

      if (session) {
        if (args.length) {
          response = await func(...args, session);
        } else {
          response = await func(session);
        }
      }
    } else {
      response = await func(...args);
    }

    if (response) {
      responseObj.data = response.data;
    }
  } catch (error) {
    responseObj.error = error.response?.data?.message || error.message;
  }
  return responseObj;
}

export const callAllTransactions = () => {
  return generateServerAction(dataService.getAllTransactions);
};

export const callTransactionDetails = (hash) => {
  return generateServerAction(dataService.getTransactionDetails, hash);
};

export const callAllBlocks = () => {
  return generateServerAction(dataService.getAllBlocks);
};

export const callBlockDetails = (block) => {
  return generateServerAction(dataService.getBlockDetails, block);
};

export const callAllChanges = () => {
  return generateServerAction(dataService.getAllChanges);
};

export const callAuditDetails = (advid, appid) => {
  return generateServerAction(dataService.getAuditDetails, advid, appid);
};
