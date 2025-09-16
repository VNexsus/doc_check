/**
 *
 * (c) Copyright AO R7 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(window, undefined){

	

	window.Asc.plugin.init = function(text)
	{
		var sText = text.toLowerCase();
		
		var pattern1 = ["коммерческая тайна", "секретно", "особой важности", "для служебного пользования", "дсп", "конфиденциально"]
		var pattern2 = ["уч.№", "уч. №", "уч.n", "уч. n", "экз.№", "экз. №", "кт-б", "кт-и", "кт-э"];
		var found1 = 0;
		var found2 = 0;
		
		for(var i = 0; i < pattern1.length ; i++){
			if(sText.indexOf(pattern1[i]) != -1)
				found1++;
		}
		for(var i = 0; i < pattern2.length ; i++){
			if(sText.indexOf(pattern2[i]) != -1)
				found2++;
		}
		
		if (sText == "")
			document.getElementById("result").innerHTML = "Пожалуйста, выделите фрагмент текста или весь документ!"
		else if(found1 == 0 || found2 == 0)
			document.getElementById("result").innerHTML = "Анализ документа не выявил признаков наличия информации, составляющей коммерческую тайну!"
		else if(found1 > 1 || found2 > 1)
			document.getElementById("result").innerHTML = "Внимание!!! Документ с высокой вероятностью содержит информацию, относящуюся к коммерческой тайне"
		else
			document.getElementById("result").innerHTML = "Документ содержит признаки наличия информации, составляющей коммерческую тайну!"
		
	};

	window.Asc.plugin.button = function(id)
	{
 		this.executeCommand("close", "");
	};

	window.Asc.plugin.onExternalMouseUp = function()
    {
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("mouseup", true, true, window, 1, 0, 0, 0, 0,
            false, false, false, false, 0, null);

        document.dispatchEvent(evt);
    };

})(window, undefined);
