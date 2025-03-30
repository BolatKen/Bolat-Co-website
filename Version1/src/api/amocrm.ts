const AMOCRM_SUBDOMAIN = "bolatco"; // Поддомен AmoCRM
const AMOCRM_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFjNDI3NWZlZjNhMTU1ZjI3YjRhMTNiY2VmMzY4ZWZjZjYwNDkyZjgyYTM1OGQwYjAyZDY1NjMxNzZhNmZmOGM3YjExY2I0NmJiMWE4NzFkIn0.eyJhdWQiOiJiZmJlNmJiMS0wZWVmLTQwZTktOGI4Zi04ZTkwNGVmYThhOGYiLCJqdGkiOiJhYzQyNzVmZWYzYTE1NWYyN2I0YTEzYmNlZjM2OGVmY2Y2MDQ5MmY4MmEzNThkMGIwMmQ2NTYzMTc2YTZmZjhjN2IxMWNiNDZiYjFhODcxZCIsImlhdCI6MTc0MTU5MTY4MCwibmJmIjoxNzQxNTkxNjgwLCJleHAiOjE4NjgyMjcyMDAsInN1YiI6IjEyMTA2MDIyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNzQ5Njk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMTcwY2RmOGItOGNlNC00YzA2LWFlNjItYjBiNjBhNDEwMTZkIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.etS-M4Wnj8tXTfPrTDp3OdU6HBFJIkLi4ggvW2REXFZ9kuhRqffrnBqJOp59B0i1qpGCdSb21HMfP07M3ngW7BfSlOwLSIw8P9VsJeWRnVLzlo-WAYPR7YMgNu61qrbeO_-gcEgTSaP0cz48UorPnzY7XGQaaitTlBu4NcPzPAYQd1Cw_WXOpSmt1cWn43xy7X5dep0wlAO9WFpQziMXEid3unQp47E9UtBV9R00sO4Oinltfnc6qBjrafyEgJuNuNWL_IxD_qBcp6ryWEUuLDC0FqwRbRMrBMpRNjpHyyQ_LntEsi7sE2mJqsXHixU3qzblSgG3pwzS3AafeDrI7g"; // Твой access_token

export const createAmoDeal = async (name: string, phone:string , message:string) => {
  const dealData = [
    {
        name: "Web-Site|Bolat Kendrik",
        pipeline_id: 8166530,
        group_id: -1,
        created_by: 0,
        custom_fields_values: [
            {
                field_id: 891365,
                values: [
                    {
                        value: "дата созд: 12 март"
                    }
                ]
            }
        ]
    }
];

  try {
    const response = await fetch(`https://${AMOCRM_SUBDOMAIN}.amocrm.ru/api/v4/leads`, {
      method: "POST",
      headers: {
        Authorization: AMOCRM_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dealData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Ошибка отправки сделки в AmoCRM:", error);
    return null;
  }
};
