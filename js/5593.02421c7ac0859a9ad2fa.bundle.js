(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[5593],{35593:(e,t,n)=>{"use strict";n.r(t),n.d(t,{conf:()=>i,language:()=>r});var i={wordPattern:/(#?-?\d*\.\d\w*%?)|([@#!.:]?[\w-?]+%?)|[@#!.]/g,comments:{blockComment:["/*","*/"],lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),end:new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")}}},r={defaultToken:"",tokenPostfix:".less",identifier:"-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",identifierPlus:"-?-?([a-zA-Z:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],tokenizer:{root:[{include:"@nestedJSBegin"},["[ \\t\\r\\n]+",""],{include:"@comments"},{include:"@keyword"},{include:"@strings"},{include:"@numbers"},["[*_]?[a-zA-Z\\-\\s]+(?=:.*(;|(\\\\$)))","attribute.name","@attribute"],["url(\\-prefix)?\\(",{token:"tag",next:"@urldeclaration"}],["[{}()\\[\\]]","@brackets"],["[,:;]","delimiter"],["#@identifierPlus","tag.id"],["&","tag"],["\\.@identifierPlus(?=\\()","tag.class","@attribute"],["\\.@identifierPlus","tag.class"],["@identifierPlus","tag"],{include:"@operators"},["@(@identifier(?=[:,\\)]))","variable","@attribute"],["@(@identifier)","variable"],["@","key","@atRules"]],nestedJSBegin:[["``","delimiter.backtick"],["`",{token:"delimiter.backtick",next:"@nestedJSEnd",nextEmbedded:"text/javascript"}]],nestedJSEnd:[["`",{token:"delimiter.backtick",next:"@pop",nextEmbedded:"@pop"}]],operators:[["[<>=\\+\\-\\*\\/\\^\\|\\~]","operator"]],keyword:[["(@[\\s]*import|![\\s]*important|true|false|when|iscolor|isnumber|isstring|iskeyword|isurl|ispixel|ispercentage|isem|hue|saturation|lightness|alpha|lighten|darken|saturate|desaturate|fadein|fadeout|fade|spin|mix|round|ceil|floor|percentage)\\b","keyword"]],urldeclaration:[{include:"@strings"},["[^)\r\n]+","string"],["\\)",{token:"tag",next:"@pop"}]],attribute:[{include:"@nestedJSBegin"},{include:"@comments"},{include:"@strings"},{include:"@numbers"},{include:"@keyword"},["[a-zA-Z\\-]+(?=\\()","attribute.value","@attribute"],[">","operator","@pop"],["@identifier","attribute.value"],{include:"@operators"},["@(@identifier)","variable"],["[)\\}]","@brackets","@pop"],["[{}()\\[\\]>]","@brackets"],["[;]","delimiter","@pop"],["[,=:]","delimiter"],["\\s",""],[".","attribute.value"]],comments:[["\\/\\*","comment","@comment"],["\\/\\/+.*","comment"]],comment:[["\\*\\/","comment","@pop"],[".","comment"]],numbers:[["(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",{token:"attribute.value.number",next:"@units"}],["#[0-9a-fA-F_]+(?!\\w)","attribute.value.hex"]],units:[["(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?","attribute.value.unit","@pop"]],strings:[['~?"',{token:"string.delimiter",next:"@stringsEndDoubleQuote"}],["~?'",{token:"string.delimiter",next:"@stringsEndQuote"}]],stringsEndDoubleQuote:[['\\\\"',"string"],['"',{token:"string.delimiter",next:"@popall"}],[".","string"]],stringsEndQuote:[["\\\\'","string"],["'",{token:"string.delimiter",next:"@popall"}],[".","string"]],atRules:[{include:"@comments"},{include:"@strings"},["[()]","delimiter"],["[\\{;]","delimiter","@pop"],[".","key"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9sZXNzL2xlc3MuanMiXSwibmFtZXMiOlsiY29uZiIsIndvcmRQYXR0ZXJuIiwiY29tbWVudHMiLCJibG9ja0NvbW1lbnQiLCJsaW5lQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsIm5vdEluIiwic3Vycm91bmRpbmdQYWlycyIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImlkZW50aWZpZXIiLCJpZGVudGlmaWVyUGx1cyIsInRva2VuIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJuZXh0IiwibmVzdGVkSlNCZWdpbiIsIm5leHRFbWJlZGRlZCIsIm5lc3RlZEpTRW5kIiwib3BlcmF0b3JzIiwia2V5d29yZCIsInVybGRlY2xhcmF0aW9uIiwiYXR0cmlidXRlIiwiY29tbWVudCIsIm51bWJlcnMiLCJ1bml0cyIsInN0cmluZ3MiLCJzdHJpbmdzRW5kRG91YmxlUXVvdGUiLCJzdHJpbmdzRW5kUXVvdGUiLCJhdFJ1bGVzIl0sIm1hcHBpbmdzIjoidUlBSU8sSUFBSUEsRUFBTyxDQUNkQyxZQUFhLGlEQUNiQyxTQUFVLENBQ05DLGFBQWMsQ0FBQyxLQUFNLE1BQ3JCQyxZQUFhLE1BRWpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFDM0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLFlBQzND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c0JBRS9DWSxzQkFBdUIsQ0FDbkIsQ0FBQyxRQUFTLFVBQ1YsQ0FBQyxJQUFLLENBQUVoQixNQUFPLG1CQUFvQkksS0FBTSxZQUN6QyxDQUFDLElBQUssV0FFVmEsZ0JBQWlCLENBQ2IsQ0FBQyxRQUFTLFVBQ1YsQ0FBQyxJQUFLLENBQUVqQixNQUFPLG1CQUFvQkksS0FBTSxZQUN6QyxDQUFDLElBQUssV0FFVmMsUUFBUyxDQUNMLENBQUVmLFFBQVMsYUFDWCxDQUFFQSxRQUFTLFlBQ1gsQ0FBQyxPQUFRLGFBQ1QsQ0FBQyxTQUFVLFlBQWEsUUFDeEIsQ0FBQyxJQUFLIiwiZmlsZSI6ImpzLzU1OTMuMDI0MjFjN2FjMDg1OWE5YWQyZmEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKCM/LT9cXGQqXFwuXFxkXFx3KiU/KXwoW0AjIS46XT9bXFx3LT9dKyU/KXxbQCMhLl0vZyxcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLydcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojcmVnaW9uXFxcXGJcXFxccyooLio/KVxcXFxzKlxcXFwqXFxcXC8nKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNlbmRyZWdpb25cXFxcYi4qXFxcXCpcXFxcLycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5sZXNzJyxcclxuICAgIGlkZW50aWZpZXI6ICctPy0/KFthLXpBLVpdfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKShbXFxcXHdcXFxcLV18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXHJcbiAgICBpZGVudGlmaWVyUGx1czogJy0/LT8oW2EtekEtWjouXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkoW1xcXFx3XFxcXC06Ll18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XHJcbiAgICBdLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbmVzdGVkSlNCZWdpbicgfSxcclxuICAgICAgICAgICAgWydbIFxcXFx0XFxcXHJcXFxcbl0rJywgJyddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BrZXl3b3JkJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXHJcbiAgICAgICAgICAgIFsnWypfXT9bYS16QS1aXFxcXC1cXFxcc10rKD89Oi4qKDt8KFxcXFxcXFxcJCkpKScsICdhdHRyaWJ1dGUubmFtZScsICdAYXR0cmlidXRlJ10sXHJcbiAgICAgICAgICAgIFsndXJsKFxcXFwtcHJlZml4KT9cXFxcKCcsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgWydbe30oKVxcXFxbXFxcXF1dJywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbJ1ssOjtdJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJyNAaWRlbnRpZmllclBsdXMnLCAndGFnLmlkJ10sXHJcbiAgICAgICAgICAgIFsnJicsICd0YWcnXSxcclxuICAgICAgICAgICAgWydcXFxcLkBpZGVudGlmaWVyUGx1cyg/PVxcXFwoKScsICd0YWcuY2xhc3MnLCAnQGF0dHJpYnV0ZSddLFxyXG4gICAgICAgICAgICBbJ1xcXFwuQGlkZW50aWZpZXJQbHVzJywgJ3RhZy5jbGFzcyddLFxyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyUGx1cycsICd0YWcnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG9wZXJhdG9ycycgfSxcclxuICAgICAgICAgICAgWydAKEBpZGVudGlmaWVyKD89WzosXFxcXCldKSknLCAndmFyaWFibGUnLCAnQGF0dHJpYnV0ZSddLFxyXG4gICAgICAgICAgICBbJ0AoQGlkZW50aWZpZXIpJywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIFsnQCcsICdrZXknLCAnQGF0UnVsZXMnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmVzdGVkSlNCZWdpbjogW1xyXG4gICAgICAgICAgICBbJ2BgJywgJ2RlbGltaXRlci5iYWNrdGljayddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnYCcsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuYmFja3RpY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAbmVzdGVkSlNFbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmVzdGVkSlNFbmQ6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJ2AnLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmJhY2t0aWNrJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHBvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnQHBvcCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3BlcmF0b3JzOiBbWydbPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH5dJywgJ29wZXJhdG9yJ11dLFxyXG4gICAgICAgIGtleXdvcmQ6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJyhAW1xcXFxzXSppbXBvcnR8IVtcXFxcc10qaW1wb3J0YW50fHRydWV8ZmFsc2V8d2hlbnxpc2NvbG9yfGlzbnVtYmVyfGlzc3RyaW5nfGlza2V5d29yZHxpc3VybHxpc3BpeGVsfGlzcGVyY2VudGFnZXxpc2VtfGh1ZXxzYXR1cmF0aW9ufGxpZ2h0bmVzc3xhbHBoYXxsaWdodGVufGRhcmtlbnxzYXR1cmF0ZXxkZXNhdHVyYXRlfGZhZGVpbnxmYWRlb3V0fGZhZGV8c3BpbnxtaXh8cm91bmR8Y2VpbHxmbG9vcnxwZXJjZW50YWdlKVxcXFxiJyxcclxuICAgICAgICAgICAgICAgICdrZXl3b3JkJ1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICB1cmxkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWydbXilcXHJcXG5dKycsICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGF0dHJpYnV0ZTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbmVzdGVkSlNCZWdpbicgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BrZXl3b3JkJyB9LFxyXG4gICAgICAgICAgICBbJ1thLXpBLVpcXFxcLV0rKD89XFxcXCgpJywgJ2F0dHJpYnV0ZS52YWx1ZScsICdAYXR0cmlidXRlJ10sXHJcbiAgICAgICAgICAgIFsnPicsICdvcGVyYXRvcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BvcGVyYXRvcnMnIH0sXHJcbiAgICAgICAgICAgIFsnQChAaWRlbnRpZmllciknLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgWydbKVxcXFx9XScsICdAYnJhY2tldHMnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJ1t7fSgpXFxcXFtcXFxcXT5dJywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbJ1s7XScsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJ1ssPTpdJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJ1xcXFxzJywgJyddLFxyXG4gICAgICAgICAgICBbJy4nLCAnYXR0cmlidXRlLnZhbHVlJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcKicsICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcLysuKicsICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWydcXFxcKlxcXFwvJywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJy4nLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBudW1iZXJzOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICcoXFxcXGQqXFxcXC4pP1xcXFxkKyhbZUVdW1xcXFwtK10/XFxcXGQrKT8nLFxyXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZS5udW1iZXInLCBuZXh0OiAnQHVuaXRzJyB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsnI1swLTlhLWZBLUZfXSsoPyFcXFxcdyknLCAnYXR0cmlidXRlLnZhbHVlLmhleCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB1bml0czogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnKGVtfGV4fGNofHJlbXx2bWlufHZtYXh8dnd8dmh8dm18Y218bW18aW58cHh8cHR8cGN8ZGVnfGdyYWR8cmFkfHR1cm58c3xtc3xIenxrSHp8JSk/JyxcclxuICAgICAgICAgICAgICAgICdhdHRyaWJ1dGUudmFsdWUudW5pdCcsXHJcbiAgICAgICAgICAgICAgICAnQHBvcCdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nczogW1xyXG4gICAgICAgICAgICBbJ34/XCInLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAc3RyaW5nc0VuZERvdWJsZVF1b3RlJyB9XSxcclxuICAgICAgICAgICAgW1wifj8nXCIsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdzRW5kUXVvdGUnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdzRW5kRG91YmxlUXVvdGU6IFtcclxuICAgICAgICAgICAgWydcXFxcXFxcXFwiJywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbJ1wiJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcGFsbCcgfV0sXHJcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nc0VuZFF1b3RlOiBbXHJcbiAgICAgICAgICAgIFtcIlxcXFxcXFxcJ1wiLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFtcIidcIiwgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcGFsbCcgfV0sXHJcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXRSdWxlczogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICBbJ1soKV0nLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsnW1xcXFx7O10nLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWycuJywgJ2tleSddXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9