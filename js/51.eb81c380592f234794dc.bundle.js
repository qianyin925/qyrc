(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{943:function(e,t,n){"use strict";n.r(t),n.d(t,"conf",(function(){return o})),n.d(t,"language",(function(){return i}));var o={wordPattern:/(#?-?\d*\.\d\w*%?)|([@$#!.:]?[\w-?]+%?)|[@#!.]/g,comments:{blockComment:["/*","*/"],lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),end:new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")}}},i={defaultToken:"",tokenPostfix:".scss",ws:"[ \t\n\r\f]*",identifier:"-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],tokenizer:{root:[{include:"@selector"}],selector:[{include:"@comments"},{include:"@import"},{include:"@variabledeclaration"},{include:"@warndebug"},["[@](include)",{token:"keyword",next:"@includedeclaration"}],["[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)",{token:"keyword",next:"@keyframedeclaration"}],["[@](page|content|font-face|-moz-document)",{token:"keyword"}],["[@](charset|namespace)",{token:"keyword",next:"@declarationbody"}],["[@](function)",{token:"keyword",next:"@functiondeclaration"}],["[@](mixin)",{token:"keyword",next:"@mixindeclaration"}],["url(\\-prefix)?\\(",{token:"meta",next:"@urldeclaration"}],{include:"@controlstatement"},{include:"@selectorname"},["[&\\*]","tag"],["[>\\+,]","delimiter"],["\\[",{token:"delimiter.bracket",next:"@selectorattribute"}],["{",{token:"delimiter.curly",next:"@selectorbody"}]],selectorbody:[["[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))","attribute.name","@rulevalue"],{include:"@selector"},["[@](extend)",{token:"keyword",next:"@extendbody"}],["[@](return)",{token:"keyword",next:"@declarationbody"}],["}",{token:"delimiter.curly",next:"@pop"}]],selectorname:[["#{",{token:"meta",next:"@variableinterpolation"}],["(\\.|#(?=[^{])|%|(@identifier)|:)+","tag"]],selectorattribute:[{include:"@term"},["]",{token:"delimiter.bracket",next:"@pop"}]],term:[{include:"@comments"},["url(\\-prefix)?\\(",{token:"meta",next:"@urldeclaration"}],{include:"@functioninvocation"},{include:"@numbers"},{include:"@strings"},{include:"@variablereference"},["(and\\b|or\\b|not\\b)","operator"],{include:"@name"},["([<>=\\+\\-\\*\\/\\^\\|\\~,])","operator"],[",","delimiter"],["!default","literal"],["\\(",{token:"delimiter.parenthesis",next:"@parenthizedterm"}]],rulevalue:[{include:"@term"},["!important","literal"],[";","delimiter","@pop"],["{",{token:"delimiter.curly",switchTo:"@nestedproperty"}],["(?=})",{token:"",next:"@pop"}]],nestedproperty:[["[*_]?@identifier@ws:","attribute.name","@rulevalue"],{include:"@comments"},["}",{token:"delimiter.curly",next:"@pop"}]],warndebug:[["[@](warn|debug)",{token:"keyword",next:"@declarationbody"}]],import:[["[@](import)",{token:"keyword",next:"@declarationbody"}]],variabledeclaration:[["\\$@identifier@ws:","variable.decl","@declarationbody"]],urldeclaration:[{include:"@strings"},["[^)\r\n]+","string"],["\\)",{token:"meta",next:"@pop"}]],parenthizedterm:[{include:"@term"},["\\)",{token:"delimiter.parenthesis",next:"@pop"}]],declarationbody:[{include:"@term"},[";","delimiter","@pop"],["(?=})",{token:"",next:"@pop"}]],extendbody:[{include:"@selectorname"},["!optional","literal"],[";","delimiter","@pop"],["(?=})",{token:"",next:"@pop"}]],variablereference:[["\\$@identifier","variable.ref"],["\\.\\.\\.","operator"],["#{",{token:"meta",next:"@variableinterpolation"}]],variableinterpolation:[{include:"@variablereference"},["}",{token:"meta",next:"@pop"}]],comments:[["\\/\\*","comment","@comment"],["\\/\\/+.*","comment"]],comment:[["\\*\\/","comment","@pop"],[".","comment"]],name:[["@identifier","attribute.value"]],numbers:[["(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",{token:"number",next:"@units"}],["#[0-9a-fA-F_]+(?!\\w)","number.hex"]],units:[["(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?","number","@pop"]],functiondeclaration:[["@identifier@ws\\(",{token:"meta",next:"@parameterdeclaration"}],["{",{token:"delimiter.curly",switchTo:"@functionbody"}]],mixindeclaration:[["@identifier@ws\\(",{token:"meta",next:"@parameterdeclaration"}],["@identifier","meta"],["{",{token:"delimiter.curly",switchTo:"@selectorbody"}]],parameterdeclaration:[["\\$@identifier@ws:","variable.decl"],["\\.\\.\\.","operator"],[",","delimiter"],{include:"@term"},["\\)",{token:"meta",next:"@pop"}]],includedeclaration:[{include:"@functioninvocation"},["@identifier","meta"],[";","delimiter","@pop"],["(?=})",{token:"",next:"@pop"}],["{",{token:"delimiter.curly",switchTo:"@selectorbody"}]],keyframedeclaration:[["@identifier","meta"],["{",{token:"delimiter.curly",switchTo:"@keyframebody"}]],keyframebody:[{include:"@term"},["{",{token:"delimiter.curly",next:"@selectorbody"}],["}",{token:"delimiter.curly",next:"@pop"}]],controlstatement:[["[@](if|else|for|while|each|media)",{token:"keyword.flow",next:"@controlstatementdeclaration"}]],controlstatementdeclaration:[["(in|from|through|if|to)\\b",{token:"keyword.flow"}],{include:"@term"},["{",{token:"delimiter.curly",switchTo:"@selectorbody"}]],functionbody:[["[@](return)",{token:"keyword"}],{include:"@variabledeclaration"},{include:"@term"},{include:"@controlstatement"},[";","delimiter"],["}",{token:"delimiter.curly",next:"@pop"}]],functioninvocation:[["@identifier\\(",{token:"meta",next:"@functionarguments"}]],functionarguments:[["\\$@identifier@ws:","attribute.name"],["[,]","delimiter"],{include:"@term"},["\\)",{token:"meta",next:"@pop"}]],strings:[['~?"',{token:"string.delimiter",next:"@stringenddoublequote"}],["~?'",{token:"string.delimiter",next:"@stringendquote"}]],stringenddoublequote:[["\\\\.","string"],['"',{token:"string.delimiter",next:"@pop"}],[".","string"]],stringendquote:[["\\\\.","string"],["'",{token:"string.delimiter",next:"@pop"}],[".","string"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Njc3Mvc2Nzcy5qcyJdLCJuYW1lcyI6WyJjb25mIiwid29yZFBhdHRlcm4iLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImxpbmVDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwibm90SW4iLCJzdXJyb3VuZGluZ1BhaXJzIiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4Iiwid3MiLCJpZGVudGlmaWVyIiwidG9rZW4iLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsInNlbGVjdG9yIiwibmV4dCIsInNlbGVjdG9yYm9keSIsInNlbGVjdG9ybmFtZSIsInNlbGVjdG9yYXR0cmlidXRlIiwidGVybSIsInJ1bGV2YWx1ZSIsInN3aXRjaFRvIiwibmVzdGVkcHJvcGVydHkiLCJ3YXJuZGVidWciLCJpbXBvcnQiLCJ2YXJpYWJsZWRlY2xhcmF0aW9uIiwidXJsZGVjbGFyYXRpb24iLCJwYXJlbnRoaXplZHRlcm0iLCJkZWNsYXJhdGlvbmJvZHkiLCJleHRlbmRib2R5IiwidmFyaWFibGVyZWZlcmVuY2UiLCJ2YXJpYWJsZWludGVycG9sYXRpb24iLCJjb21tZW50IiwibmFtZSIsIm51bWJlcnMiLCJ1bml0cyIsImZ1bmN0aW9uZGVjbGFyYXRpb24iLCJtaXhpbmRlY2xhcmF0aW9uIiwicGFyYW1ldGVyZGVjbGFyYXRpb24iLCJpbmNsdWRlZGVjbGFyYXRpb24iLCJrZXlmcmFtZWRlY2xhcmF0aW9uIiwia2V5ZnJhbWVib2R5IiwiY29udHJvbHN0YXRlbWVudCIsImNvbnRyb2xzdGF0ZW1lbnRkZWNsYXJhdGlvbiIsImZ1bmN0aW9uYm9keSIsImZ1bmN0aW9uaW52b2NhdGlvbiIsImZ1bmN0aW9uYXJndW1lbnRzIiwic3RyaW5ncyIsInN0cmluZ2VuZGRvdWJsZXF1b3RlIiwic3RyaW5nZW5kcXVvdGUiXSwibWFwcGluZ3MiOiIyRkFBQSxxRkFLTyxJQUFJQSxFQUFPLENBQ2RDLFlBQWEsa0RBQ2JDLFNBQVUsQ0FDTkMsYUFBYyxDQUFDLEtBQU0sTUFDckJDLFlBQWEsTUFFakJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLFlBQzNDLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFDM0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLFlBQzNDLENBQUVGLEtBQU0sSUFBTUMsTUFBTyxJQUFNQyxNQUFPLENBQUMsU0FBVSxhQUVqREMsaUJBQWtCLENBQ2QsQ0FBRUgsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBTUMsTUFBTyxNQUV6QkcsUUFBUyxDQUNMQyxRQUFTLENBQ0xDLE1BQU8sSUFBSUMsT0FBTyxnREFDbEJDLElBQUssSUFBSUQsT0FBTywyQ0FJakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsYUFBYyxRQUNkQyxHQUFJLGVBQ0pDLFdBQVksc0hBQ1pmLFNBQVUsQ0FDTixDQUFFRSxLQUFNLElBQUtDLE1BQU8sSUFBS2EsTUFBTyxtQkFDaEMsQ0FBRWQsS0FBTSxJQUFLQyxNQUFPLElBQUthLE1BQU8scUJBQ2hDLENBQUVkLEtBQU0sSUFBS0MsTUFBTyxJQUFLYSxNQUFPLHlCQUNoQyxDQUFFZCxLQUFNLElB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QUMxQyxDQUFDLElBQUsiLCJmaWxlIjoianMvNTEuZWI4MWMzODA1OTJmMjM0Nzk0ZGMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgd29yZFBhdHRlcm46IC8oIz8tP1xcZCpcXC5cXGRcXHcqJT8pfChbQCQjIS46XT9bXFx3LT9dKyU/KXxbQCMhLl0vZyxcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLydcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojcmVnaW9uXFxcXGJcXFxccyooLio/KVxcXFxzKlxcXFwqXFxcXC9cIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccypcXFxcL1xcXFwqXFxcXHMqI2VuZHJlZ2lvblxcXFxiLipcXFxcKlxcXFwvXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5zY3NzJyxcclxuICAgIHdzOiAnWyBcXHRcXG5cXHJcXGZdKicsXHJcbiAgICBpZGVudGlmaWVyOiAnLT8tPyhbYS16QS1aXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkoW1xcXFx3XFxcXC1dfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKSonLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScgfVxyXG4gICAgXSxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9yJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VsZWN0b3I6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaW1wb3J0JyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVkZWNsYXJhdGlvbicgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdhcm5kZWJ1ZycgfSxcclxuICAgICAgICAgICAgWydbQF0oaW5jbHVkZSknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAaW5jbHVkZWRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgWydbQF0oa2V5ZnJhbWVzfC13ZWJraXQta2V5ZnJhbWVzfC1tb3ota2V5ZnJhbWVzfC1vLWtleWZyYW1lcyknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAa2V5ZnJhbWVkZWNsYXJhdGlvbicgfV0sXHJcbiAgICAgICAgICAgIFsnW0BdKHBhZ2V8Y29udGVudHxmb250LWZhY2V8LW1vei1kb2N1bWVudCknLCB7IHRva2VuOiAna2V5d29yZCcgfV0sXHJcbiAgICAgICAgICAgIFsnW0BdKGNoYXJzZXR8bmFtZXNwYWNlKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dLFxyXG4gICAgICAgICAgICBbJ1tAXShmdW5jdGlvbiknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZnVuY3Rpb25kZWNsYXJhdGlvbicgfV0sXHJcbiAgICAgICAgICAgIFsnW0BdKG1peGluKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BtaXhpbmRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgWyd1cmwoXFxcXC1wcmVmaXgpP1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbnRyb2xzdGF0ZW1lbnQnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzZWxlY3Rvcm5hbWUnIH0sXHJcbiAgICAgICAgICAgIFsnWyZcXFxcKl0nLCAndGFnJ10sXHJcbiAgICAgICAgICAgIFsnWz5cXFxcKyxdJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJ1xcXFxbJywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0BzZWxlY3RvcmF0dHJpYnV0ZScgfV0sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHNlbGVjdG9yYm9keScgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZWxlY3RvcmJvZHk6IFtcclxuICAgICAgICAgICAgWydbKl9dP0BpZGVudGlmaWVyQHdzOig/PShcXFxcc3xcXFxcZHxbXns7fV0qWzt9XSkpJywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BydWxldmFsdWUnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9yJyB9LFxyXG4gICAgICAgICAgICBbJ1tAXShleHRlbmQpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGV4dGVuZGJvZHknIH1dLFxyXG4gICAgICAgICAgICBbJ1tAXShyZXR1cm4pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV0sXHJcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZWxlY3Rvcm5hbWU6IFtcclxuICAgICAgICAgICAgWycjeycsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B2YXJpYWJsZWludGVycG9sYXRpb24nIH1dLFxyXG4gICAgICAgICAgICBbJyhcXFxcLnwjKD89W157XSl8JXwoQGlkZW50aWZpZXIpfDopKycsICd0YWcnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlbGVjdG9yYXR0cmlidXRlOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJ10nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXJtOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcclxuICAgICAgICAgICAgWyd1cmwoXFxcXC1wcmVmaXgpP1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZ1bmN0aW9uaW52b2NhdGlvbicgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVyZWZlcmVuY2UnIH0sXHJcbiAgICAgICAgICAgIFsnKGFuZFxcXFxifG9yXFxcXGJ8bm90XFxcXGIpJywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BuYW1lJyB9LFxyXG4gICAgICAgICAgICBbJyhbPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH4sXSknLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWycsJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJyFkZWZhdWx0JywgJ2xpdGVyYWwnXSxcclxuICAgICAgICAgICAgWydcXFxcKCcsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBhcmVudGhpemVkdGVybScgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBydWxldmFsdWU6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnIWltcG9ydGFudCcsICdsaXRlcmFsJ10sXHJcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAbmVzdGVkcHJvcGVydHknIH1dLFxyXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG5lc3RlZHByb3BlcnR5OiBbXHJcbiAgICAgICAgICAgIFsnWypfXT9AaWRlbnRpZmllckB3czonLCAnYXR0cmlidXRlLm5hbWUnLCAnQHJ1bGV2YWx1ZSddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXHJcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3YXJuZGVidWc6IFtcclxuICAgICAgICAgICAgWydbQF0od2FybnxkZWJ1ZyknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGltcG9ydDogW1xyXG4gICAgICAgICAgICBbJ1tAXShpbXBvcnQpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YXJpYWJsZWRlY2xhcmF0aW9uOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllckB3czonLCAndmFyaWFibGUuZGVjbCcsICdAZGVjbGFyYXRpb25ib2R5J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB1cmxkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWydbXilcXHJcXG5dKycsICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGFyZW50aGl6ZWR0ZXJtOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRlY2xhcmF0aW9uYm9keTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcclxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZXh0ZW5kYm9keTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3JuYW1lJyB9LFxyXG4gICAgICAgICAgICBbJyFvcHRpb25hbCcsICdsaXRlcmFsJ10sXHJcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhcmlhYmxlcmVmZXJlbmNlOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllcicsICd2YXJpYWJsZS5yZWYnXSxcclxuICAgICAgICAgICAgWydcXFxcLlxcXFwuXFxcXC4nLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWycjeycsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B2YXJpYWJsZWludGVycG9sYXRpb24nIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFyaWFibGVpbnRlcnBvbGF0aW9uOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZXJlZmVyZW5jZScgfSxcclxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50czogW1xyXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXConLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXC8rLionLCAnY29tbWVudCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbJ1xcXFwqXFxcXC8nLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnLicsICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuYW1lOiBbXHJcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBudW1iZXJzOiBbXHJcbiAgICAgICAgICAgIFsnKFxcXFxkKlxcXFwuKT9cXFxcZCsoW2VFXVtcXFxcLStdP1xcXFxkKyk/JywgeyB0b2tlbjogJ251bWJlcicsIG5leHQ6ICdAdW5pdHMnIH1dLFxyXG4gICAgICAgICAgICBbJyNbMC05YS1mQS1GX10rKD8hXFxcXHcpJywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHVuaXRzOiBbXHJcbiAgICAgICAgICAgIFsnKGVtfGV4fGNofHJlbXx2bWlufHZtYXh8dnd8dmh8dm18Y218bW18aW58cHh8cHR8cGN8ZGVnfGdyYWR8cmFkfHR1cm58c3xtc3xIenxrSHp8JSk/JywgJ251bWJlcicsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZ1bmN0aW9uZGVjbGFyYXRpb246IFtcclxuICAgICAgICAgICAgWydAaWRlbnRpZmllckB3c1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBhcmFtZXRlcmRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQGZ1bmN0aW9uYm9keScgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBtaXhpbmRlY2xhcmF0aW9uOiBbXHJcbiAgICAgICAgICAgIC8vIG1peGluIHdpdGggcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyQHdzXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcGFyYW1ldGVyZGVjbGFyYXRpb24nIH1dLFxyXG4gICAgICAgICAgICAvLyBtaXhpbiB3aXRob3V0IHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdtZXRhJ10sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGFyYW1ldGVyZGVjbGFyYXRpb246IFtcclxuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICd2YXJpYWJsZS5kZWNsJ10sXHJcbiAgICAgICAgICAgIFsnXFxcXC5cXFxcLlxcXFwuJywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgICAgIFsnLCcsICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGluY2x1ZGVkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZnVuY3Rpb25pbnZvY2F0aW9uJyB9LFxyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ21ldGEnXSxcclxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAc2VsZWN0b3Jib2R5JyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGtleWZyYW1lZGVjbGFyYXRpb246IFtcclxuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdtZXRhJ10sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BrZXlmcmFtZWJvZHknIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAga2V5ZnJhbWVib2R5OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0BzZWxlY3RvcmJvZHknIH1dLFxyXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29udHJvbHN0YXRlbWVudDogW1xyXG4gICAgICAgICAgICBbJ1tAXShpZnxlbHNlfGZvcnx3aGlsZXxlYWNofG1lZGlhKScsIHsgdG9rZW46ICdrZXl3b3JkLmZsb3cnLCBuZXh0OiAnQGNvbnRyb2xzdGF0ZW1lbnRkZWNsYXJhdGlvbicgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb250cm9sc3RhdGVtZW50ZGVjbGFyYXRpb246IFtcclxuICAgICAgICAgICAgWycoaW58ZnJvbXx0aHJvdWdofGlmfHRvKVxcXFxiJywgeyB0b2tlbjogJ2tleXdvcmQuZmxvdycgfV0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAc2VsZWN0b3Jib2R5JyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZ1bmN0aW9uYm9keTogW1xyXG4gICAgICAgICAgICBbJ1tAXShyZXR1cm4pJywgeyB0b2tlbjogJ2tleXdvcmQnIH1dLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVkZWNsYXJhdGlvbicgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb250cm9sc3RhdGVtZW50JyB9LFxyXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmdW5jdGlvbmludm9jYXRpb246IFtcclxuICAgICAgICAgICAgWydAaWRlbnRpZmllclxcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQGZ1bmN0aW9uYXJndW1lbnRzJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZ1bmN0aW9uYXJndW1lbnRzOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllckB3czonLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWydbLF0nLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgIFsnfj9cIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdlbmRkb3VibGVxdW90ZScgfV0sXHJcbiAgICAgICAgICAgIFsnfj9cXCcnLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAc3RyaW5nZW5kcXVvdGUnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdlbmRkb3VibGVxdW90ZTogW1xyXG4gICAgICAgICAgICBbJ1xcXFxcXFxcLicsICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWydcIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ2VuZHF1b3RlOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXFxcXFwuJywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbJ1xcJycsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=