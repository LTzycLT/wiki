$(document).ready(function() { //��ʼ
if($('input#author[value]').length>0){ //�ж��û����Ƿ���ֵ
$("#author_info").css('display','none'); //��idΪauthor_info�Ķ����display������Ϊnone��������
var change='<span id="show_author_info" style="cursor: pointer; color:#2970A6;">change &raquo;</span>'; //����change��style�Ƕ���CSS��ʽ�������г����ӵ�Ч����colorҪ�������Լ������ģ���Ȼ��Ҳ������CSS�ж���#show_author_info��ʵ�֣�������Ϊ�˲�����ȥ�޸�style.css���ѣ�
var close='<span id="hide_author_info" style="cursor: pointer;color: #2970A6;">close &raquo;</span>'; //����close
$('#welcome').append(change); //��IDΪwelcome�Ķ�������Ӹոն����change
$('#welcome').append(close); // ���close
$('#hide_author_info').css('display','none'); //����close
$('#show_author_info').click(function() { //�����changeʱ�������¼�
$('#author_info').slideDown('slow'); //�û���������»���
$('#show_author_info').css('display','none'); //����change
$('#hide_author_info').css('display','inline'); //��ʾclose
$('#hide_author_info').click(function() { // �����closeʱ�������¼�
$('#author_info').slideUp('slow'); //�û���������ϻ�
$('#hide_author_info').css('display','none'); //����close
$('#show_author_info').css('display','inline'); })})}}) //��ʾchange