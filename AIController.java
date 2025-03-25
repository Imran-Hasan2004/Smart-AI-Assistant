package com.imran.gemini_chat;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@AllArgsConstructor
@RequestMapping("/api/qna/")
public class AIController {

    private final QnaService qnaService;
    
    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String , String> payload){

        String question = payload.get("question");
        String answer = qnaService.getAnswer(question);
        return ResponseEntity.ok(answer);

    }
}
