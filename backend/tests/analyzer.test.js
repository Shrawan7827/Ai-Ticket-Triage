const analyzeTicket = require('../analyzer/ticketAnalyzer');

test('detects technical issue', () => {
  const result = analyzeTicket("App is crashing");

  expect(result.category).toBe("Technical");
});

test('detects urgency', () => {
  const result = analyzeTicket("Server is down urgently");

  expect(result.priority).toBe("P0");
});

test('detects billing', () => {
  const result = analyzeTicket("I need a refund");

  expect(result.category).toBe("Billing");
});