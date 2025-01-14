align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Создайте новый внешний том (дефрагментация не решит проблему, так как неблагоприятно влияет на возможность
правдоподобного отрицания наличия шифрования &ndash; см. раздел
<a href="Дефрагментация.html" style="text-align:left; color:#0080c0; text-decoration:none.html">
Дефрагментация</a>).</div>
</blockquote>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Решение для случая 3:</div>
<blockquote style="text-align:left">
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Примечание. Следующее решение применимо только к скрытым томам, созданным внутри томов с файловой системой FAT.</div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Дефрагментируйте внешний том (смонтируйте его, щёлкните правой кнопкой мыши по его букве диска в окне
<em style="text-align:left">Компьютер</em> или <em style="text-align:left">Мой компьютер</em>, нажмите
<em style="text-align:left">Свойства</em>, перейдите на вкладку <em style="text-align:left">
Сервис</em> и нажмите <em style="text-align:left">Выполнить дефрагментацию</em>). После того как том будет
дефрагментирован, закройте окно
<em style="text-align:left">Дефрагментация диска</em> и попытайтесь снова создать скрытый том.
<br style="text-align:left">
<br style="text-align:left">
Если это не помогло, удалите <em style="text-align:left">все</em> файлы и папки во внешнем томе нажатием клавиш
Shift&#43;Delete, но не форматированием (не забудьте заранее отключить для этого диска Корзину и восстановление
системы), и попробуйте снова создать скрытый том в этом <em style="text-align:left">полностью пустом</em>
внешнем томе (только с целью проверки). Если максимально возможный размер скрытого тома не изменился даже сейчас,
причина проблемы, вероятнее всего, кроется в расширенной корневой папке. Если вы использовали размер кластеров,
отличный от <i>предлагаемого по умолчанию</i> (последний этап в работе мастера), переформатируйте внешний том,
на этот раз оставив <i>размер кластера по умолчанию</i>.</div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Если это не помогло, ещё раз переформатируйте внешний том и скопируйте в его корневую папку меньше файлов/папок,
чем в прошлый раз. Если проблема не решается, повторяйте форматирование и уменьшайте количество файлов/папок
в корневой папке. Если это неприемлемо или не помогает, переформатируйте внешний том, выбрав больший размер
кластеров. Если это не помогло, повторяйте переформатирование, увеличивая размер кластеров, пока проблема
не будет решена. В качестве альтернативы попробуйте создать скрытый том внутри тома с файловой системой NTFS.
</div>
</blockquote>
<hr style="text-align:left">
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
<strong style="text-align:left">Проблема: </strong></div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Возникает одна из следующих проблем:</div>
<ul style="text-align:left; margin-top:18px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
<li style="text-align:left; margin-top:0px; margin-bottom:0px; padding-top:0px; padding-bottom:0px">
невозможно смонтировать том VeraCrypt</li><li style="text-align:left; margin-top:0px; margin-bottom:0px; padding-top:0px; padding-bottom:0px">
невозможно создавать тома VeraCrypt с файловой системой NTFS</li></ul>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Кроме того, возможна следующая ошибка: "<i>Процесс не может получить доступ к файлу, занятому другим процессом</i>".</div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
<strong style="text-align:left">Вероятная причина: </strong></div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Возможно, проблема вызвана вмешательством какой-либо сторонней программы. Обратите внимание, что это не
ошибка в VeraCrypt. Операционная система сообщает VeraCrypt, что устройство заблокировано для исключительного
доступа каким-либо приложением (поэтому VeraCrypt не может к нему обратиться).</div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
<strong style="text-align:left">Возможное решение: </strong></div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Как правило, помогает отключение или удаление мешающего приложения (обычно это антивирусное ПО, программы управления дисками и т. д.).</div>
<hr style="text-align:left">
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
<strong style="text-align:left">Проблема: </strong></div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
<em style="text-align:left">На экране загрузчика VeraCrypt я пытаюсь ввести пароль и/или нажимать другие
клавиши, но загрузчик никак на это не реагирует.</em></div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
<strong style="text-align:left">Вероятная причина: </strong></div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
У вас клавиатура USB (не PS/2), а в настройках BIOS отключена поддержка USB-клавиатур в фазе до загрузки ОС.</div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
<strong style="text-align:left">Возможное решение: </strong></div>
<div style="text-align:left; margin-top:19px; margin-bottom:19px; padding-top:0px; padding-bottom:0px">
Ну